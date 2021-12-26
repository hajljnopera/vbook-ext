load('libs.js');

function execute(url) {
    var host = 'https://hiperdex.com';
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        if ($.Q(doc, '#cf-wrapper')) {
            log('Cloudflare!!!');

            log($.Q(doc, '#challenge-form').html())
            doc = fetchDOM(url);
        }

        return Response.success({
            name: $.Q(doc, 'div.post-title > h1').text().trim(),
            cover: $.Q(doc, 'div.summary_image > a > img').attr('src'),
            author: 'Unknown',
            description: $.Q(doc, 'div.summary__content').html(),
            detail: $.QA(doc, 'div.summary_content div.post-content_item', {m: x => x.text(), j: '<br>'}),
            host: host
        })
    }
    return null;
}

function fetchDOM(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 15 * 1000);
    browser.callJs(';', 1000);
    var doc = browser.html();
    browser.close();
    return doc;
}
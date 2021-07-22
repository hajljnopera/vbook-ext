load('libs.js');

function execute(url) {

    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }

    return Response.success({
        name: $.Q(doc, 'div.profile-manga > div > div.post-title > h1').text().trim(),
        cover: $.Q(doc, 'div.summary_image > a > img').attr('src'),
        author: $.Q(doc, 'div.post-content > div:nth-child(3) > div.summary-content > div').text(),
        description: $.Q(doc, 'div.panel-story-description > div').html(),
        detail: $.QA(doc, 'div.summary_content_wrap .post-content > .post-content_item', {m: x => $.Q(x, '.summary-heading').text().rtrim(':') + ': ' + $.Q(x, '.summary-content').text(), j: '<br>'}),
        host: 'https://manga18fx.com',
        ongoing: $.Q(doc, 'div.summary_content_wrap > div > div.post-status > div:nth-child(2) > div.summary-content').text().includes('OnGoing')
    });
}

function fetchDOM(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 15*1000);
    var doc = browser.html();
    browser.close();
    return doc;
}
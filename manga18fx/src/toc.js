load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }

    var host = 'https://manga18fx.com';
    var data = [];
    
    var elems = $.QA(doc, '#chapterlist > ul > li > a', { reverse : true });
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}

function fetchDOM(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 15*1000);
    var doc = browser.html();
    browser.close();
    return doc;
}
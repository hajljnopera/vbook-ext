load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://manga18fx.com';
    url = String.format(url, page);

    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }

    var data = [];

    var elems = $.QA(doc, 'div.page-item');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').text(),
            link: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').attr('href'),
            cover: $.Q(e, 'div.bsx-item > div.thumb-manga > a > img').attr('src'),
            description: $.Q(e, 'div.bsx-item > div.bigor-manga > div.list-chapter > div').text(),
            host: host
        })
    });

    var next = $.Q(doc, '#blog-pager > ul > li.active + li').text();
    
    return Response.success(data, next);
}


function fetchDOM(url) {
    var browser = Engine.newBrowser();

    browser.launch(url, 15*1000);
    // browser.waitUrl(".*?manga18fx.com/manga/.*?", 15*1000);

    var doc = browser.html();
    browser.close();
    return doc;
}
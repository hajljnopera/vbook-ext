load('libs.js');

function execute(url, page) {
    var host = 'https://skymanga.co';
    page = page || '1';
    var newUrl = page == '1' ? host : String.format(host + url, page);
    var doc = Http.get(newUrl).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(newUrl);
    }
    var data = [];
    var elems = $.QA(doc, 'div.page-item-detail');
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'h3 a').text(),
            link: $.Q(e, 'h3 a').attr('href'),
            cover: $.Q(e, 'div.item-thumb img').attr('data-src'),
            description: $.Q(e, 'div.chapter-item > span > a').text(),
            host: host
        })
    });

    // log(data);
    
    var next = $.Q(doc, '.nav-links .nav-previous > a').attr('href');
    if (next) next = next.match(/page\/(\d+)/)[1];

    if (data.length) return Response.success(data, next);

    return Response.error(host);
}
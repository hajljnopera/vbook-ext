load('libs.js');

function execute(url, page) {
    var host = 'https://www.hentairules.net';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];
    var elems = $.QA(doc, '#main article');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.entry-title > a').text(),
            link: $.Q(e, '.entry-title > a').attr('href'),
            cover: $.Q(e, '.content img[loading="lazy"]').attr('src'),
            description: $.Q(e, '.meta time').text(),
            host: host
        })
    });

    // log(data);

    var next = $.Q(doc, '.wp-pagenavi span.current + a').text();
    
    return Response.success(data, next);
}
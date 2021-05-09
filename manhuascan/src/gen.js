load('libs.js');

function execute(url, page) {
    var host = 'https://manhuascan.com';
    page = page || '1';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '.media');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'h3 a').text(),
            link: $.Q(e, 'h3 a').attr('href'),
            cover: $.Q(e, 'img').attr('data-original'),
            description: $.Q(e, '.media-body', {remove: 'h3, small, br, span'}).text(),
            host: host
        })
    });

    var next = $.Q(doc, 'div.pagination-wrap li > a.active').text();
    if (next) {
        next = parseInt(next, 10) + 1;
        return Response.success(data, next.toString());
    }

    return Response.success(data);
}
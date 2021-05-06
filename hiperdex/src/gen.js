load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://hiperdex.com';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];
    
    var elems = $.QA(doc, 'div.page-item-detail.manga');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.item-summary h3 > a').text(),
            link: $.Q(e, 'div.item-summary h3 > a').attr('href'),
            cover: $.Q(e, 'div.item-thumb > a > img').attr('src'),
            description: $.Q(e, 'div.list-chapter a.btn-link').text(),
            host: host
        })
    });

    var next = $.Q(doc, 'span.current + a').text();

    return Response.success(data, next);
}
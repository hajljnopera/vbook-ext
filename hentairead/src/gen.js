load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://hentairead.com';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];
    
    var elems = $.QA(doc, '.page-item-detail-wrapper');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.h5 > a').text(),
            link: $.Q(e, '.h5 > a').attr('href'),
            cover: $.Q(e, '.item-thumb-wrapper img').attr('data-src').trim(),
            description: $.Q(e, 'div.list-chapter a.btn-link').text(),
            host: host
        })
    });

    var next = $.Q(doc, '.wp-pagenavi > span.current + a').text();

    return Response.success(data, next);
}
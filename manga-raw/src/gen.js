load('libs.js');

function execute(url, page) {
    var host = 'https://www.manga-raw.club';
    page = page || '1';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];
    var imgErr = 'https://www.manga-raw.club/static/img/loading.gif';

    var elems = $.QA(doc, '.container .novel-item > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.attr('title'),
            link: e.attr('href'),
            cover: $.Q(e, '.novel-cover > img').attr('data-src'),
            description: $.Q(e, 'h6.text1row').text(),
            host: host
        })
    });

    var next = $.Q(doc, 'div.pagination-container li.active > span').text();
    if (next) {
        next = parseInt(next, 10) + 1;
        return Response.success(data, next.toString());
    }

    return Response.success(data);
}
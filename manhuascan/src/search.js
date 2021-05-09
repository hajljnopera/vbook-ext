load('libs.js');

function execute(key, page) {
    var host = 'https://manhuascan.com';
    var http = Http.get('https://manhuascan.com/manga-list.html').params({'listType': 'pagination', page: page || '1', 'name': key});
    var doc = http.html();
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
}

function genCover(id) {
    return String.format('https://manhwas.men/uploads/manga/{0}/cover/cover_250x350.jpg', id);
}
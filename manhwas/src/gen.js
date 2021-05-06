load('libs.js');

function execute(url, page) {
    var host = 'https://manhwas.men';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];
    
    var elems = $.QA(doc, 'ul.hot-thumbnails > li > div.photo');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.manga-name > a').text(),
            link: $.Q(e, 'div.manga-name > a').attr('href'),
            cover: $.Q(e, 'a.thumbnail > img').attr('src'),
            description: $.Q(e, 'div.well > p > i').text().trim(),
            host: host
        })
    });

    return Response.success(data);
}
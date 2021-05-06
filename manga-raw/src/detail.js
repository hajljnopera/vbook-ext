load('libs.js');

function execute(url) {
    var host = 'https://www.manga-raw.club';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'h1.novel-title').text(),
        cover: $.Q(doc, 'figure.cover > img').attr('data-src'),
        author: $.Q(doc, '.author > a > span').text(),
        description: $.Q(doc, '.description').html(),
        detail: $.Q(doc, '.author').text(),
        host: host,
        ongoing: $.Q(doc, 'strong.ongoing').text() != ''
    });
}
load('libs.js');

function execute(url) {
    var host = 'https://hentaiporns.net';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'h1.card_title').text(),
        cover: $.Q(doc, '.post-thumbnail img').attr('src'),
        author: 'Unknown',
        description: $.Q(doc, '.hcontent').html(),
        detail: 'Updated on: ' + $.Q(doc, 'time.entry-date.published.updated').text(),
        host: host
    });
}
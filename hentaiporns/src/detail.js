load('libs.js');

function execute(url) {
    var host = 'https://hentaiporns.net';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'h1.entry-title').text(),
        cover: $.Q(doc, '.post-thumbnail img').attr('src'),
        author: 'Unknown',
        description: $.QA(doc, '.entry-footer > span > a', {m: x => x.text().trim(), j: ', '}),
        detail: 'Updated on: ' + $.Q(doc, 'time.entry-date.published.updated').text(),
        host: host
    });
}
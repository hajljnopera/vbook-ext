load('libs.js');

function execute(url) {
    var host = 'https://www.hentairules.net';
    var doc = Http.get(url).html();

    var tags = $.QA(doc, '.tags > a', {m: x => x.text(), j: ', '});

    return Response.success({
        name: $.Q(doc, '.entry-title > a').text(),
        cover: $.Q(doc, '.content img[loading="lazy"]').attr('src'),
        author: 'Unknown',
        description: tags,
        detail: $.Q(doc, '.meta time').text(),
        host: host
    });
}
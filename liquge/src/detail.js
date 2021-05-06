load('libs.js');

function execute(url) {
    var host = 'http://www.liquge.com';

    url = url.replace('m.liquge.com', 'www.liquge.com').append('/');
    var doc = Http.get(url).html();

    var author = $.Q(doc, '#content span[style] + span').text().replace('作者：', '').trim();

    return Response.success({
        name: $.Q(doc, '#content span[style]').text(),
        cover: $.Q(doc, 'div.divbox.cf img').attr('src'),
        author: author,
        description: $.Q(doc, 'div.tabvalue div[style]').text(),
        detail: authorRaw,
        host: host
    })
}
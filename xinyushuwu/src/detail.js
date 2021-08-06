load('libs.js');

function execute(url) {
    var host = 'https://www.xinyushuwu.com';
    url = url.replace('m.xinyushuwu.com', 'www.xinyushuwu.com').append('/');
    var doc = Http.get(url).html('gbk');

    var author = $.Q(doc, '.introduce a[href*="author"]').text();
    var lastUpdated = $.Q(doc, '.bq > span').text();

    return Response.success({
        name: $.Q(doc, '.introduce > h1').text(),
        cover: $.Q(doc, '.catalog img').attr('src') || 'https://www.xinyushuwu.com/modules/article/images/nocover.jpg',
        author: author,
        description: $.Q(doc, '.jj').text(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}
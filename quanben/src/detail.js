load('libs.js');

function execute(url) {
    var host = 'http://www.quanben.io';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'span[itemprop=name]').text(),
        cover: $.Q(doc, 'div.list2 > img').attr('src'),
        author: $.Q(doc, 'span[itemprop=author]').text(),
        description: $.Q(doc, 'div[itemprop=description]').text(),
        detail: $.Q(doc, 'div.list2', {remove: ['img', 'h3']}).text(),
        host: host
    });
}
load('libs.js');

function execute(url) {
    var host = 'https://manhuascan.com';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, '.breadcrumb span[itemprop="name"]', 2).text(),
        cover: $.Q(doc, 'img.thumbnail').attr('src'),
        author: 'Mr X',
        description: $.Q(doc, '.detail > .content').html(),
        detail: '',
        host: host
    });
}
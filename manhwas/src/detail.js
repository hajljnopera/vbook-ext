load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'h2.widget-title').text().trim(),
        cover: $.Q(doc, 'div.col-sm-4 > div > img').attr('src'),
        author: 'Unknown',
        description: $.Q(doc, 'div.well > p').html(),
        detail: '',
        host: 'https://manhwas.men',
        ongoing: $.Q(doc, 'div.col-sm-8 > dl').text().includes('Ongoing')
    });
}
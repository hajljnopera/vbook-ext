load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    var author = $.QA(doc, 'table tr', {f: x => x.text().includes('Author'), m: x => x.text().replace('Author', '').trim(), j: ', '}) || 'Unknown';

    return Response.success({
        name: $.Q(doc, 'div.manga-top-info > h1.title').text(),
        cover: $.Q(doc, 'div.manga-container img').attr('src'),
        author: author,
        description: $.Q(doc, 'div.description', {remove: 'h5, div.alert'}).html(),
        detail: 'Author: ' + author,
        host: 'https://rawdevart.com',
        ongoing: $.QA(doc, 'table tr', {f: x => x.text().includes('Status') && x.text().includes('Ongoing')}).length == 1,
    })
}
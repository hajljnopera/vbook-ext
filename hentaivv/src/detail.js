load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'h1.crop-text-1').text(),
        cover: $.Q(doc, 'div.book3d > img').attr('data-src'),
        author: $.QA(doc, '#thong_tin > table > tbody > tr', {f: x => x.text().includes('Tác Giả'), m: x => x.text().replace('Tác Giả:', '').trim(), j: ' '}),
        description: $.Q(doc, 'div.gioi_thieu').html(),
        detail: $.QA(doc, '#thong_tin tr', {m: x => x.text(), j: '<br>'}),
        host: 'https://hentaivv.com'
    });
}
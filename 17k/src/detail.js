load('libs.js');

function execute(url) {
    var host = 'https://www.17k.com';
    url = url.replace('h5.17k.com', 'www.17k.com');
    var doc = Http.get(url).html();

    var author = $.Q(doc, 'div.author a.name').text();

    return Response.success({
        name: $.Q(doc, 'div.Info > h1 > a').text(),
        cover: $.Q(doc, '#bookCover img').attr('src'),
        author: author,
        description: $.Q(doc, 'p.intro > a').html(),
        detail: String.format('作者:{0}<br>{1}<br>{2}', author, $.QA(doc, 'tr.label a', {m: x => x.text(), j: ','}), $.Q(doc, 'dt.tit > em').text()),
        host: host
    });
}
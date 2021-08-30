load('libs.js');

function execute(url) {
    var host = 'https://book.qidian.com';
    url = url.replace(/m\.qidian\.com\/book\/(\d+)/, 'book.qidian.com/info/$1');
    var doc = Http.get(url).html();

    var author = $.Q(doc, 'div.book-info > h1 > span > a').text();
    var tags = $.QA(doc, 'div.book-info > p.tag > *', {m: x => x.text(), j: '，'});

    return Response.success({
        name: $.Q(doc, 'div.book-info > h1 > em').text(),
        cover: $.Q(doc, '#bookImg > img').attr('src').mayBeFillHost(host),
        author: author,
        description: $.Q(doc, 'div.book-info-detail > div.book-intro').html(),
        detail: String.format('作者：{0}<br>{1}', author, tags),
        host: host
    })
}
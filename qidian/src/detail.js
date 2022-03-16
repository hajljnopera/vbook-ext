load('libs.js');

function execute(url) {
    var host = 'https://book.qidian.com';
    var bookId = getBookId(url);
    // log(bookId);
    url = 'https://book.qidian.com/info/' + bookId;

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    var author = $.Q(doc, 'div.book-info > h1 > span > a').text();
    var tags = $.QA(doc, 'div.book-info > p.tag > *', {m: x => x.text(), j: '，'});

    return Response.success({
        name: $.Q(doc, 'div.book-info > h1 > em').text(),
        cover: $.Q(doc, '#bookImg > img').attr('src').mayBeFillHost(host),
        author: author,
        description: $.Q(doc, 'div.book-info-detail > div.book-intro').html(),
        detail: String.format('作者：{0}<br>{1}', author, tags),
        host: host,
        url: 'https://m.qidian.com/book/' + bookId + '.html'
    })
}

function getBookId(url) {
    const BOOK_ID_REGEX = /(?:book|m)\.qidian\.com\/(?:info|book)\/(\d+)(?:\.html)?/
    let m = url.match(BOOK_ID_REGEX)
    return m && m[1]
}
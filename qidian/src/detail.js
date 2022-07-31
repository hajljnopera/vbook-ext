load('libs.js');

function execute(url) {
    let host = 'https://book.qidian.com';
    let bookId = getBookId(url);
    // log(bookId);
    url = 'https://book.qidian.com/info/' + bookId + '/';

    let response = fetch(url);
    // log(response.status);
    let doc;

    if (!response.ok) return null;
    if (response.status == 202) {
        let browser = Engine.newBrowser();
        browser.launch(url, 15*1000);
        doc = browser.html();
        // log(doc);
    }
    else {
        doc = response.html();
    }

    let author = $.Q(doc, '.book-info > h1 > span > a').text();
    let tags = $.QA(doc, '.book-info > p.tag > *', {m: x => x.text(), j: '，'});

    return Response.success({
        name: $.Q(doc, '.book-info h1 em').text(),
        cover: $.Q(doc, '#bookImg img').attr('src').mayBeFillHost(host),
        author: author,
        description: $.Q(doc, '.book-info-detail .book-intro').html(),
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
load('libs.js');

function execute(url) {
    let host = 'https://book.qidian.com';
    let bookId = url.match(/\d+/g)[0];
    url = 'https://www.qidian.com/book/' + bookId + '/';
    let response = fetch(url);
    let doc;
    if (!response.ok) return null;
    if (response.status == 202) {
        let browser = Engine.newBrowser();
        browser.launch(url, 15 * 1000);
        doc = browser.html();
    }
    else {
        doc = response.html();
    }
    let cover1 = "https:" + $.Q(doc, '#bookImg img').attr('src');
    let author = doc.select('meta[property="og:novel:author"]').attr("content")
    let suggests = [
        {
            title: "Truyện cùng tác giả:",
            input: doc.select('.other-works .book-wrap-new>a'),
            script: "suggests_author.js"
        }
    ];
    return Response.success({
        name: $.Q(doc, '#bookName').text(),
        cover: cover1,
        author: author,
        description: $.Q(doc, '#book-intro-detail').html(),
        host: host,
        suggests: suggests,
    });
}
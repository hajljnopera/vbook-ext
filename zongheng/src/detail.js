load('libs.js');

function execute(url) {
    url = url
        .replace(/https?:\/\/(book|huayu)\.zongheng\.com\/book\/(\d+)\.html$/g, 'http://$1.zongheng.com/book/$2.html')
        .replace(/https?:\/\/m\.zongheng\.com\/h.+\/book\?bookid=(\d+).*$/, 'http://book.zongheng.com/book/$1.html');
    // log(url);
    var doc = Http.get(url).html();

    var author = $.Q(doc, 'div.book-author > div.au-name > a').text();

    return Response.success({
        name: $.Q(doc, 'div.book-info > div.book-name').text().trim(),
        cover: $.Q(doc, 'div.book-img.fl > img').attr('src'),
        author: author,
        description: $.Q(doc, '.book-dec.Jbook-dec > p').html(),
        detail: '作者: ' + author + '<br>' + $.QA(doc, 'div.book-info > div.book-label a', {m: x => x.text(), j: ','}),
        // host: ''
    });
}
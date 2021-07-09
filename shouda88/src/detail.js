load('libs.js');

function execute(url) {
    var host = 'https://www.shouda88.com';
    
    // https://m.shouda88.com/shu_117454.html --> https://www.shouda88.com/117454/
    url = url.replace(/m\.shouda88\.com\/shu_(\d+)\.html/, 'www.shouda88.com/$1/');
    // https://m.shouda88.com/181423/ --> https://www.shouda88.com/181423/
    url = url.replace('m.shouda88.com', 'www.shouda88.com');

    var doc = Http.get(url).html();

    var author = $.Q(doc, 'div.bookname > h1 > em').text().replace('作者：', '').trim();
    var lastUpdated = $.Q(doc, 'div.top > span', 3).text();

    return Response.success({
        name: $.Q(doc, 'div.bookname > h1', {remove: 'em'}).text(),
        cover: $.Q(doc, 'div.pic > img').attr('src').mayBeFillHost('https://img.shouda88.com'),
        author: author,
        description: $.Q(doc, 'div.intro', {remove: 'p.book_keywords, script'}).text(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}
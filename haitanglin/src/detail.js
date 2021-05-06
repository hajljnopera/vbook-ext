load('libs.js');

function execute(url) {
    var host = 'https://www.haitanglin.com';
    // https://m.haitanglin.com/book/21 --> https://www.haitanglin.com/info/21.html
    url = url.replace(/(www|m)\.haitanglin\.com\/(info|book)\/(\d+)(\.html)?$/, 'www.haitanglin.com/info/$3.html');
    var doc = Http.get(url).html();

    var coverImg = $.Q(doc, '#fmimg img').attr('src');
	var author = $.Q(doc, '#info p', 1).text().replace('作 者：', '');

    return Response.success({
        name: $.Q(doc, '#info h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro').text(),
        detail: String.format('作者: {0}', author),
        host: host
    });
}
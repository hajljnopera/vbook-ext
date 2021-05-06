load('libs.js');

function execute(url) {
    var host = 'https://www.piaotian5.com';
    url = url.replace('m.piaotian5.com', 'www.piaotian5.com');
    var doc = Http.get(url).html();

    var coverImg = $.Q(doc, '#fmimg img').attr('src').mayBeFillHost(host);
	var author = $.Q(doc, '#info p').text().replace(/作.*者：/, '');

    return Response.success({
        name: $.Q(doc, '#info h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro').text().replace(/各位书友要是觉得.*?还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！/, '').trim(),
        detail: String.format('作者: {0}<br>{1}', author, $.Q(doc, '#info > p', 4).text()),
        host: host
    });
}
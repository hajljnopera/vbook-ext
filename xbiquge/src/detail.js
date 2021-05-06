load('libs.js');

function execute(url) {
    var host = 'https://www.xbiquge.cc';
    url = url.replace('m.xbiquge.cc', 'www.xbiquge.cc').append('/');
    var doc = Http.get(url).html();

    var coverImg = $.Q(doc, '#fmimg img').attr('src').mayBeFillHost(host);
	var author = $.Q(doc, '#info p').text().replace('作者：', '');

    return Response.success({
        name: $.Q(doc, '#info h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro').text(),
        detail: String.format('{0}<br>{1}', $.Q(doc, '#info > p:nth-child(2)').text(), $.Q(doc, '#info > p:nth-child(4)').text()),
        host: host
    })
}
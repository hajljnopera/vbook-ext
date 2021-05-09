load('libs.js');

function execute(url) {
    var host = 'https://www.nofff.com';
    url = url.replace('m.nofff.com', 'www.nofff.com');
    var doc = Http.get(url).html('gbk');

	var author = $.Q(doc, '#info p').text().replace(/作.*者：/, '');

    // https://www.nofff.com/Bookimg/0/3/3s.jpg

    var m, id, cover;
    if ((m = $.Q(doc, '#fmimg script').attr('src').match(/id=(\d+)/)) && m[1] && (id = m[1])) {
        cover = String.format('https://www.nofff.com/Bookimg/{0}/{1}/{2}s.jpg', Math.floor(id / 1000), id, id);
    }

    return Response.success({
        name: $.Q(doc, '#info h1').text(),
        cover: cover || '',
        author: author,
        description: $.Q(doc, '#intro > p').html().replace('内容简介：', ''),
        detail: String.format('作者: {0}<br>{1}', author, $.Q(doc, '#info > p', 2).text()),
        host: host
    });
}
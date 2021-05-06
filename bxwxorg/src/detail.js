load('libs.js');

function execute(url) {
    var host = 'https://www.bxwxorg.com';
    url = url.replace(/(www|m)\.(bxwxorg|bxwx66)\.com\/(book|read)\/(\d+)(\.html)?/, 'www.bxwxorg.com/read/$4');

    var doc = Http.get(url).html();

    var coverImg = $.Q(doc, '#fmimg img').attr('src');
	var author = $.Q(doc, '#info h1 + p > a').text();

    return Response.success({
        name: $.Q(doc, '#info h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro > p').text(),
        detail: String.format('{0}<br>{1}', $.Q(doc, '#info > p:nth-child(2)').text(), $.Q(doc, '#info > p:nth-child(4)').text()),
        host: host
    })
}
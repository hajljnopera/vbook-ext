load('libs.js');

function execute(url) {
    var host = 'http://www.mytxt.cc';
    url = url.replace('m.mytxt.cc', 'www.mytxt.cc').append('/');
    var doc = Http.get(url).html();

	var author = $.Q(doc, 'div[class^=info_left] > h2 > a').text();

    return Response.success({
        name: $.Q(doc, 'div[class^=info_left] > h1').text(),
        cover: $.Q(doc, 'div[class^=story_cover] > img').attr('src'),
        author: author,
        description: $.Q(doc, '[id^=intro]').html().replace(/<.+>.*?$/gm, '').trim(),
        detail: String.format('作者: {0}', author),
        host: host
    });
}
load('libs.js');

function execute(url) {
	url = url.replace('h5.17k.com', 'www.17k.com');
    var doc = Http.get(url).html();

    var htm = '';
    var isVIP = $.Q(doc, 'div.readAreaBox.content').text() == '';
    if (isVIP) {
        htm = $.Q(doc, 'div.content', {remove: 'a'}).html();
    } else {
        htm = $.Q(doc, 'div.readAreaBox.content > div.p', {remove: 'p.copy, #banner_content, div.qrcode, div.chapter_text_ad'}).html();
        htm = htm.replace(/<!--[^>]*-->/gm, ''); // Strip html comments
    }

    return Response.success(htm);
}
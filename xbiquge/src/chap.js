load('libs.js');

function execute(url) {
    url = url.replace('//m.', '//www.');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content').html();
    // log(htm);

    htm = htm.replace(/笔趣阁.*?最快更新.*?<br>/g, '');
    htm = cleanHtml(htm);

    return Response.success(htm);
}
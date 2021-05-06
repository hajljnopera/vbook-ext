load('libs.js');

function execute(url) {
    url = url.replace('m.xbiquge.cc', 'www.xbiquge.cc');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content').html();

    htm = htm.replace(/笔趣阁 www\.xbiquge\.cc，最快更新.*? ！/g, '');
    htm = cleanHtml(htm);

    return Response.success(htm);
}
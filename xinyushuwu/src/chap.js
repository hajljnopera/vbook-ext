load('libs.js');

function execute(url) {
    url = url.replace('m.xinyushuwu.com', 'www.xinyushuwu.com');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#articlecontent').html();

    htm = cleanHtml(htm);
    // log(htm);

    return Response.success(htm);
}
load('libs.js');

function execute(url) {
    url = url.replace('m.lrxs.org', 'www.lrxs.org');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#content').html();

    htm = cleanHtml(htm);
    // log(htm);

    return Response.success(htm);
}
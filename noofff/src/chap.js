load('libs.js');

function execute(url) {
    url = url.replace('m.nofff.com', 'www.nofff.com');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#content').html();

    return Response.success(htm);
}
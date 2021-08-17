load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '.content').html();
    htm = cleanHtml(htm);
    return Response.success(htm);
}
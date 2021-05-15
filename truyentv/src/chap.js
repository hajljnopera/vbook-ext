load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '.ndtruyen', {remove: 'em'}).html();
    return Response.success(htm);
}
load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '.ndtruyen', {remove: 'em, center, a[target="_blank"]'}).html();
    return Response.success(htm);
}
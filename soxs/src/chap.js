load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    var htm = $.Q(doc, '.content', {remove: 'p'}).html();
    htm = htm.replace(/^.*?soxs.*?<br>/, '');
    htm = cleanHtml(htm);

    return Response.success(htm);
}
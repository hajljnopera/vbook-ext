load('libs.js');

function execute(url) {
    var doc = Http.get(url).html('gb2312');
    var htm = $.Q(doc, 'body', {remove: 'h1, div, table, script, center'}).html();

    htm = cleanHtml(htm);

    return Response.success(htm);
}
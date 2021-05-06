load('libs.js');

function execute(url) {
    url = url.replace('m.mytxt.cc', 'www.mytxt.cc');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content', {remove: 'p[style]'}).html();

    htm = cleanHtml(htm);

    return Response.success(htm);
}
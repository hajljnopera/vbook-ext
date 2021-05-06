load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content').html();

    htm = htm
        .replace(/\&nbsp;/g, '')
        ;

    return Response.success(htm);
}
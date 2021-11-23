load('libs.js');

function execute(url) {
    url = url.replace('m.piaotian5.net', 'www.piaotian5.net');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content').html();

    htm = htm
        .replace(/\&nbsp;/g, '')
        .replace(/https.*piaotian5.*?<br>/, '')
        .replace(/天才一秒记住本站地址.*?(<br>|$)/, '')
        ;

    return Response.success(htm);
}
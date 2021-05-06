load('libs.js');

function execute(url) {
    url = url.replace('m.trxs.cc', 'trxs.cc');
    var doc = Http.get(url).html('gb2312');
    var htm = $.Q(doc, 'div.read_chapterDetail').html();
    return Response.success(htm);
}
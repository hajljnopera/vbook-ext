load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, ' div.content').html();

    if ($.Q(doc, '#reader-order-box').text()) htm += '<br><br>----------<br>抱歉哦，本章节为VIP章节，需要订阅才可以继续阅读哦~';

    return Response.success(htm);
}
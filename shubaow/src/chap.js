load('libs.js');

function execute(url) {
    // https://m.shubaow.net/104/104641 ---> https://www.shubaow.net/104_104641
    url = url.replace(/m\.shubaow\.net\/(\d+)\/(\d+)\/?/g, 'www.shubaow.net/$1_$2/');

    var response = fetch(url);
    if (response.ok) {
        var doc = response.html('gbk');

        var htm = $.Q(doc, '#content').html();

        htm = cleanHtml(htm);

        return Response.success(htm);
    }
    return null;
}
load('libs.js');

function execute(url) {
    url = url.replace('m.shutxt.com', 'www.shutxt.com');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '.zw').html();
    // log(htm);

    var arr = htm
        .replace(/�/g, '<br>')
        .replace(/([hｈ].{5,10})?[ＷWｗ]{3}.{3,15}[Cｃ][OＯｏ][Mｍ]/gi, '')
        .split('<br>')
        .filter(x => x.trim() != '' && !x.includes('亦凡图书馆扫校'));

    return Response.success(arr.join('<br>'));
}
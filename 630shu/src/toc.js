load('libs.js');

function execute(url) {
    var host = 'https://www.630shu.net';
    url = url.replace(/m\.630shu\.net\/(chapters|book)_(\d+)\/?$/gm, 'www.630shu.net/shu/$2.html');
    var doc = Http.get(url).html('gbk');

    var data = [];
    var elems = $.QA(doc, 'div.zjbox > dl > dd > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host:host,
        })
    });

    return Response.success(data);
}
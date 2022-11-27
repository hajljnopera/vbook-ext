load('libs.js');

function execute(url) {
    let host = 'https://www.630shu.net';
    url = url.replace(/m\.630shu\.net\/(chapters|book)_(\d+)\/?$/gm, 'www.630shu.net/shu/$2.html');

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html('gbk');

    let data = [];
    let elems = $.QA(doc, '.zjbox > dl > dd > a');
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
load('libs.js');

function execute(url) {
    var host = 'https://www.shouda88.com';
    // https://m.shouda88.com/shu_117454.html --> https://www.shouda88.com/117454/
    url = url.replace(/m\.shouda88\.com\/shu_(\d+)\.html/, 'www.shouda88.com/$1/');
    url = url.replace('m.shouda88.com', 'www.shouda88.com');
    var doc = Http.get(url).html();

    var data = [];
    var elems = $.QA(doc, 'div.link_14 dd > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
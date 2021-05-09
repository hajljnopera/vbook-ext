load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var imgs = [];

    var elems = $.QA(doc, '.entry-content noscript');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        var sc = e.html().match(/src="(.+)"/)[1];
        imgs.push(sc);
    })
    
    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
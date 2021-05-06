load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var imgs = [];

    var elems = $.QA(doc, '.entry-content img');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        imgs.push(e.attr('src'));
    })
    
    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
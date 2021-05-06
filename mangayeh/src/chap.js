load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var imgs = [];

    var elems = $.QA(doc, 'img.lzl');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e){
        var imgUrl = e.attr('data-src');
        if (imgUrl) {
            imgs.push(imgUrl.trim());
        }
    })

    if (imgs.length) return Response.success(imgs);
    return Response.error(url);
}
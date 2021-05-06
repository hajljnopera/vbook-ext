load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var imgs = [];
    
    var elems = $.QA(doc, 'div.reading > img');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        var img = e.attr('data-echo');
        if (img) imgs.push(img);
    })
    
    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
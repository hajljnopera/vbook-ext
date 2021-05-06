load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var elems = $.QA(doc, 'div#img-container img');
    if (!elems.length) return Response.error(url);
    
    var imgs = elems.map(function(e){
        return e.attr('data-src') || '';
    })
    
    return Response.success(imgs);
}
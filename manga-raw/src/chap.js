load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var elems = $.QA(doc, 'section.page-in.content-wrap img');
    if (!elems.length) return Response.error(url);
    
    var imgs = elems.map(function(e){
        return e.attr('src') || '';
    });
    
    return Response.success(imgs);
}
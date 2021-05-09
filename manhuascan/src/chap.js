load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var elems = $.QA(doc, '#content img');
    if (!elems.length) return Response.error(url);
    
    var imgs = elems.map(function(e){
        return e.attr('data-srcset') || '';
    });
    
    return Response.success(imgs);
}
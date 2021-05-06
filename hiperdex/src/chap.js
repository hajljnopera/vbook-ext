load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var elems = $.QA(doc, 'div.reading-content img.wp-manga-chapter-img');
    if (!elems.length) return Response.error(url);
    
    var imgs = elems.map(function(e){
        return e.attr('src').trim() || '';
    })
    
    return imgs.length ? Response.success(imgs) : Response.error(url);
}
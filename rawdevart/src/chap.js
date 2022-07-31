load('libs.js');

function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        var elems = $.QA(doc, '#img-container img');
        if (!elems.length) return Response.error(url);
        
        var imgs = elems.map(function(e){
            return e.attr('data-src') || '';
        })
        
        return Response.success(imgs);
    }

    return null;
}
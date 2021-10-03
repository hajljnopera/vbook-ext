load('libs.js');

function execute(url) {

    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }
    var imgs = [];

    var elems = $.QA(doc, '#owl_container img.owl-lazy');
    elems.forEach(function(e) {
        var img = e.attr('data-src');
        if (img) imgs.push(img.trim());
    })

    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }
    var elems = $.QA(doc, '.reading-content img.wp-manga-chapter-img');

    var imgs = [];
    elems.forEach(function(e) {
        var img = e.attr('data-src') || e.attr('src');
        if (img) imgs.push(img.trim());
    })

    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
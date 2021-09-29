load('libs.js');

function execute(url) {
    var host = 'https://skymanga.co';
    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }
    // log(doc);
    var data = [];
    var elems = $.QA(doc, '#manga-chapters-holder li.wp-manga-chapter > a', {reverse: true});
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    if (data.length) return Response.success(data);

    return Response.error(url);
}
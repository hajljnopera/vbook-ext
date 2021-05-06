load('libs.js');

function execute(url) {
    var host = 'https://www.manga-raw.club';
    var doc = Http.get(url).html();
    var elems = $.QA(doc, '.chapter-list > li > a', {reverse: true});
    if (!elems.length) return Response.error(url);
    
    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.chapter-title').text(),
            url: e.attr('href'),
            host: host
        })
    });

    return data.length ? Response.success(data) : Response.error(url);
}
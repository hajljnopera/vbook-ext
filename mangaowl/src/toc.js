load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var host = 'https://mangaowl.net';
    var data = [];
    
    var elems = $.QA(doc, '.table-chapter-list .chapter-url', {reverse : true});
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.chapter-title').text().trim(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
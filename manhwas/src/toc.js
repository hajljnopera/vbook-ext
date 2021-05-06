load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var host = 'https://manhwas.men';
    var data = [];

    var elems = $.QA(doc, 'ul.chapters > li > h5 > a', {reverse : true});
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text().trim(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
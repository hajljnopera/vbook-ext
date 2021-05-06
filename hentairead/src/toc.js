load('libs.js');

function execute(url) {
    var host = 'https://hentairead.com';
    var doc = Http.get(url).html();

    var data = [];
    var elems = $.QA(doc, '.wp-manga-chapter > a', {f: x => x.attr('href').trim().match(/\/hentai\/[^\/]+\/[^\/]+\/?$/)});
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text().trim(),
            url: e.attr('href').trim(),
            host: host
        })
    })

    if (data.length) return Response.success(data);

    return Response.error(url);
}
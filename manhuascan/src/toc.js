load('libs.js');

function execute(url) {
    var host = 'https://manhuascan.com';
    var doc = Http.get(url).html();
    var elems = $.QA(doc, '#list-chapters a.chapter', {reverse: true});
    if (!elems.length) return Response.error(url);
    
    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: e.attr('title'),
            url: e.attr('href'),
            host: host
        })
    });

    return data.length ? Response.success(data) : Response.error(url);
}
load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var host = 'https://mangayeh.com';
    var data = [];

    var elems = $.QA(doc, 'div.chapter-list td > a:not([class^="pull-right"])', {reverse: true});
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text().trim(),
            url: e.attr('href'),
            host: host
        })
    })

    return data.length ? Response.success(data) : Response.error(url);
}
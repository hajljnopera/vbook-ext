load('libs.js');

function execute(url) {
    url = url.replace(/.*?\.quanben\.io\/n\/([^\/]+)\/?$/, 'http://www.quanben.io/n/$1/list.html');
    var doc = Http.get(url).html();

    var data = [];
    var elems = $.QA(doc, 'li[itemprop=itemListElement] > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'span').text(),
            url: e.attr('href'),
            host: 'http://www.quanben.io'
        })
    });

    return Response.success(data);
}
load('libs.js');

function execute(url) {
	var host = 'https://czbooks.net';
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, '#chapter-list li > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href').mayBeFillHost(host),
            host: host
        })
    });

    return Response.success(data);
}
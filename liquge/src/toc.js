load('libs.js');

function execute(url) {
    
    // http://www.liquge.com/book/1280/ --> http://www.liquge.com/list/1280
    url = url.replace('m.liquge.com', 'www.liquge.com').replace('/book/', '/list/').rtrim('/');
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, 'dl.index a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: 'http://www.liquge.com'
        })
    });

    return Response.success(data);
}
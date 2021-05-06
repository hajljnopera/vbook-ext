load('libs.js');

function execute(url) {
    var host = 'http://www.mytxt.cc';
    url = url.replace('m.mytxt.cc', 'www.mytxt.cc').append('/');
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, 'div[class^=story_list] a');

    if (!elems.length) return Response.error(url);

    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}

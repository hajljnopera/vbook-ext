load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var host = 'https://manga18fx.com';
    var data = [];
    
    var elems = $.QA(doc, '#chapterlist > ul > li > a', { reverse : true });
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
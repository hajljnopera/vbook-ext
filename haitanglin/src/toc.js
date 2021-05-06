load('libs.js');

function execute(url) {
    var host = 'https://www.haitanglin.com';
    // https://m.haitanglin.com/book/21 --> https://www.haitanglin.com/info/21.html
    url = url.replace(/(www|m)\.haitanglin\.com\/(info|book)\/(\d+)(\.html)?$/, 'www.haitanglin.com/info/$3.html');
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, '#list dd > a');

    if (!elems.length) return Response.error(url);

    if (elems.length >= 12*2) {
        elems.splice(0, 12); // Remove first 12 items
    } else {
        elems.splice(0, elems.length/2);
    }

    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
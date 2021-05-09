load('libs.js');

function execute(url) {
    url = url.replace('m.nofff.com', 'www.nofff.com');
    var doc = Http.get(url).html('gbk');
    
    var data = [];
    var elems = $.QA(doc, '#list dd > a');

    if (!elems.length) return Response.error(url);

    if (elems.length >= 9*2) {
        elems.splice(0, 9); // Remove first 9 items
    } else {
        elems.splice(0, elems.length/2);
    }

    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: 'https://www.nofff.com'
        })
    });

    return Response.success(data);
}
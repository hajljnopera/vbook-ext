load('libs.js');

function execute(url) {
    url = url.replace('m.piaotian5.com', 'www.piaotian5.com');
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, 'div.listmain dd > a');

    if (!elems.length) return Response.error(url);

    if (elems.length >= 6) {
        elems.splice(0, 6); // Remove first 6 items
    } else {
        elems.splice(0, elems.length/2);
    }

    elems.forEach(function(e){
        data.push({
            name: $.Q(e, 'a').text(),
            url: e.attr('href'),
            host: 'https://www.piaotian5.com'
        })
    });

    return Response.success(data);
}
load('libs.js');

function execute(url) {
    var host = 'https://www.bxwxorg.com';
    var bookId = url.match(/(\d+)/)[1];
    var doc = Http.get(String.format('{0}/read/{1}/', host, bookId)).html();
    
    var data = [];
    var elems = $.QA(doc, '#list a');
    if (!elems.length) return Response.error(url);
    
    if (elems.length >= 12*2) {
        elems.splice(0, 12); // Remove first 12 items
    } else {
        elems.splice(0, elems.length/2);
    }

    elems.splice(0, 1);
    
    elems.forEach(function(e){
        data.push({
            name: $.Q(e, 'a').text(),
            url: e.attr('href').mayBeFillHost(host),
            host: host
        })
    })

    return Response.success(data);
}
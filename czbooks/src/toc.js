load('libs.js');

function execute(url) {
    var host = 'https://czbooks.net';

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        log(doc);
        
        var data = [];

        var elems = $.QA(doc, '#chapter-list li > a');
        log(elems.length);

        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e){
            data.push({
                name: e.text(),
                url: e.attr('href').mayBeFillHost(host),
                host: host
            })
        })

        return Response.success(data);
    }
    return null;
}
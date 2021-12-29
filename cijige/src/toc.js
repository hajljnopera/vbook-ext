load('libs.js');

function execute(url) {
    var host = 'https://www.cijige.com';

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        // log(doc);
        
        var data = [];

        var elems = $.QA(doc, '#ml .list-item li:has(> a)');
        log(elems.length);

        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e){
            data.push({
                name: e.text(),
                url: $.Q(e, 'a').attr('href').mayBeFillHost(host),
                host: host
            })
        })

        return Response.success(data);
    }
    return null;
}
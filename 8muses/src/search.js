load('libs.js');

function execute(key, page) {
    var host = 'https://comics.8muses.com';
    
    let response = fetch('https://comics.8muses.com/search', {
        method: "GET",
        queries: {
            'q': key,
        }
    });
    
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, '.c-tile');
        if (!elems.length) return Response.error(url);

        elems.forEach(function(e) {
            data.push({
                name: e.attr('title'),
                link: e.attr('href'),
                cover: $.Q(e, 'img').attr('data-src').mayBeFillHost(host),
                description: '',
                host: host
            })
        });

        return Response.success(data);
    }
    return null;
}
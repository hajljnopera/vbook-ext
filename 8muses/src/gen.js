load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://comics.8muses.com';
    url = String.format(host + url, page);
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var data = [];
        
        var elems = $.QA(doc, '.c-tile[href^="/comics/"]');
        if (!elems.length) return Response.error(url);

        elems.forEach(function(e) {
            data.push({
                name: e.attr('title').trim(),
                link: e.attr('href'),
                cover: $.Q(e, 'img').attr('data-src').mayBeFillHost(host),
                description: '',
                host: host,
            })
        });

        var next = $.Q(doc, '.pagination span.current + span > a').text();
        if (next.match(/^\d+$/)) return Response.success(data, next);
        return Response.success(data);
    }
    return null;
}
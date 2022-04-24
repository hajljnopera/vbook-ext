load('libs.js');

function execute(url) {
    var host = 'https://comics.8muses.com';

    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        var elems = $.QA(doc, '.c-tile[href^="/comics/"]');

        var data = [];
        elems.forEach(function(e) {
            data.push({
                name: e.attr('title').trim(),
                url: e.attr('href'),
                host: host
            })
        })

        if (data.length) return Response.success(data);

        return Response.error(url);
    }
    return null;
}
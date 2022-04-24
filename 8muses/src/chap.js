load('libs.js');

function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        var elems = $.QA(doc, '.image img');
        if (!elems.length) return Response.error(url);

        var imgs = elems.map(function(e){
            return e.attr('data-src').replace('/image/th/', '/image/fm/').mayBeFillHost('https://comics.8muses.com');
        })

        return imgs.length ? Response.success(imgs) : Response.error(url);
    }
    return null;
}
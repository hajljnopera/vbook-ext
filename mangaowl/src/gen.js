load('libs.js');

function execute(url, page) {
    var host = 'https://mangaowl.net';
    url = String.format(host + url, page || 1);
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '.container .comicView[data-id]');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: e.attr('data-title'),
            link: $.Q(e, 'a').attr('href'),
            cover: $.Q(e, '.img-responsive').attr('data-background-image'),
            description: $.Q(e, '.tray-item').text(),
            host: host
        })
    });

    // log(data);
    var next = $.Q(doc, '.blog-pagenat-wthree li > a.active').text();
    if (next && next.length && /\d+/.test(next)) return Response.success(data, (parseInt(next, 10) + 1).toString());

    return Response.success(data);
}
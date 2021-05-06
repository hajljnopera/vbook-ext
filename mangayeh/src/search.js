load('libs.js');

function execute(key, page) {
    var host = 'https://mangayeh.com';
    page = page || '1';
    var searchUrl = 'https://mangayeh.com/search';
    var http = Http.get(searchUrl).params({'q': key, 'page': page});
    var doc = http.html();

    var data = [];

    var elems = $.QA(doc, 'div.columns.is-multiline a.box');
    if (!elems.length) return Response.error(key);

    elems.forEach(function(e) {
        var name = $.Q(e, '.mtitle', {remove: 'span.tag'}).text().trim();
        if (!name) return;
        data.push({
            name: name,
            link: e.attr('href'),
            cover: $.Q(e, '.image img').attr('data-src'),
            description: $.Q(e, 'span.ellipsis.is-ellipsis-1').text().trim(),
            host: host
        })
    })
    // log(data);
    var next = $.Q(doc, '.buttons > a.button.is-link + a').text();
    if (next && next.match(/\d+/)) return Response.success(data, next);
    return Response.success(data);
}
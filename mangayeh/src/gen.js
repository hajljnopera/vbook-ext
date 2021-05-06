load('libs.js');

function execute(url, page) {
    var host = 'https://mangayeh.com';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'h1.title + div a.box');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.mtitle').text(),
            link: e.attr('href'),
            cover: $.Q(e, 'img.athumbnail').attr('data-src'),
            description: $.Q(e, 'span.ellipsis.is-ellipsis-1').text().replace('Last chapter:', '').trim(),
            host: host
        })
    });

    var next = $.Q(doc, 'a[aria-current].button.is-link').text();
    if (next) next = parseInt(next, 10) + 1;

    return Response.success(data, next.toString());
}
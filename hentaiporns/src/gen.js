load('libs.js');

function execute(url, page) {
    var host = 'https://hentaiporns.net';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];
    var elems = $.QA(doc, '#main > article');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.entry-title > a').text(),
            link: $.Q(e, '.entry-title > a').attr('href'),
            cover: $.Q(e, '.img-holder img').attr('src'),
            description: $.Q(e, 'time.entry-date').text(),
            host: host
        })
    });

    var next = $.Q(doc, 'span.page-numbers.current', {remove: 'span'}).text();
    if (next) next = parseInt(next, 10) + 1;

    return Response.success(data, next.toString());
}
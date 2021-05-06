load('libs.js');

function execute(url, page) {
    var host = 'https://hentaivv.com';

    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'li.col-md-6.col-xs-12');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'a').attr('title'),
            link: $.Q(e, 'a').attr('href'),
            cover: $.Q(e, 'a > img').attr('data-src') || '',
            description: $.Q(e, 'p.crop-text-2').text(),
            host: host
        })
    });

    var next = $.Q(doc, 'li.active + li').text().ltrim('0');

    return Response.success(data, next);
}
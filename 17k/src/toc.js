load('libs.js');

function execute(url) {
    var host = 'https://www.17k.com';
    url = url.replace('h5.17k.com', 'www.17k.com');
    url = url.replace('/book/', '/list/');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'dl.Volume a[target]');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        var isVIP = $.Q(e, 'span.ellipsis.vip').text();

        data.push({
            name: (isVIP ? '[VIP] ' : '') + $.Q(e, 'a').text(),
            url: e.attr('href'),
            host: host
        })
    });

    if (data.length) return Response.success(data);

    return Response.error(url);
}
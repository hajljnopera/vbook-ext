load('libs.js');

function execute(url) {
    var host = 'https://rawdevart.com';
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'div.list-group > div.list-group-item', {reverse: true});
    if (!elems.length) return Response.error(url);

    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'a').attr('title'),
            url: $.Q(e, 'a').attr('href'),
            host: host
        })
    })

    return Response.success(data);
}
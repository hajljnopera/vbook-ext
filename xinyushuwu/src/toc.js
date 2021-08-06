load('libs.js');

function execute(url) {
    var host = 'https://www.xinyushuwu.com';
    url = url.replace('m.xinyushuwu.com', 'www.xinyushuwu.com').append('/');
    var doc = Http.get(url).html('gbk');

    var data = [];
    var elems = $.QA(doc, '.ml_list li > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href').mayBeFillHost(url),
            host: host,
        })
    });

    return Response.success(data);
}
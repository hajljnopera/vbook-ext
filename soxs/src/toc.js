load('libs.js');

function execute(url) {
    var host = 'https://www.soxs.cc';
    url = correctUrl(url, host);
    var doc = Http.get(url).html();

    var data = [];
    var elems = $.QA(doc, '.novel_list[id] dd > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}

function correctUrl(url, host) {
    var s = url.match(/(([A-Z][a-z\d]{0,10})+)/)[1];
    return host + '/' + s;
}
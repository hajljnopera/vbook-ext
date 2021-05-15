load('libs.js');

function execute(url) {
    var host = 'http://truyentv.net';
    var doc = Http.get(url).html();
    var data = [];

    data.push({
        name: "Phần 1",
        url: url,
        host: host
    })

    var elems = $.QA(doc, '.bai-viet-box a.post-page-numbers');
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}
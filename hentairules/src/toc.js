load('libs.js');

function execute(url) {
    var host = 'https://www.hentairules.net';
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '.content p > strong > a');
    elems.forEach(function(e) {
        var link = e.attr('href');
        if (!link.includes('www.hentairules.net')) return;
        var name = e.text();
        if (name == 'Open the Complete Pictures Gallery') name = 'Chapter';

        data.push({
            name: name,
            url: link,
            host: host
        })
    })

    return Response.success(data);
}
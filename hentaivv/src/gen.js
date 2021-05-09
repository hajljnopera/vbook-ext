load('libs.js');

function execute(url, page) {
    var host = 'https://hentaivv.com';

    var doc = Http.get(host + url).html();
    var data = [];

    var elems = $.QA(doc, '#hotest .hotest-col');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'a').attr('title'),
            link: $.Q(e, 'a').attr('href'),
            cover: $.Q(e, 'img').attr('src'),
            description: '',
            host: host
        })
    });

    return Response.success(data);
}
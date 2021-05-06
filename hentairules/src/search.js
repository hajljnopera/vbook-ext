load('libs.js');

function execute(key, page) {
    var host = 'https://www.hentairules.net';
    var doc = Http.get(String.format('{0}/page/{1}/', host, page || '1')).params({'s': key, 'submit': 'Search'}).html();
    var data = [];
    var elems = $.QA(doc, '#main article');
    if (!elems.length) return Response.error(key);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.entry-title > a').text(),
            link: $.Q(e, '.entry-title > a').attr('href'),
            cover: $.Q(e, '.content img[loading="lazy"]').attr('src'),
            description: '',
            host: host
        })
    });

    // log(data);

    var next = $.Q(doc, '.wp-pagenavi span.current + a').text();
    
    return Response.success(data, next);
}
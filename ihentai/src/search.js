load('libs.js');

function execute(key, page) {
    var host = urlGetHost(url);
    var doc = Http.get(String.format('{0}/page/{1}/', host, page || '1')).params({'s': key}).html();
    var data = [];
    var elems = $.QA(doc, '.container article');
    if (!elems.length) return Response.error(key);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.entry-title > a').text(),
            link: $.Q(e, '.entry-title > a').attr('href'),
            cover: $.Q(e, '.post-thumbnail img').attr('src'),
            description: $.Q(e, 'time.entry-date').text(),
            host: host
        })
    });

    // log(data);

    var next = $.Q(doc, 'span.page-numbers.current', {remove: 'span'}).text();
    if (next) next = parseInt(next, 10) + 1;
    
    return Response.success(data, next.toString());
}
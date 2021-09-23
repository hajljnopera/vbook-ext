load('libs.js');

function execute(key, page) {
    var host = 'https://hiperdex.com';
    var doc = Http.get(host).params({'s': key, 'post_type': 'wp-manga'}).html();
    var data = [];

    var elems = $.QA(doc, '.tab-content-wrap .c-tabs-item .c-tabs-item__content');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.post-title a').text(),
            link: $.Q(e, '.post-title a').attr('href'),
            cover: $.Q(e, '.c-image-hover img').attr('src'),
            description: $.Q(e, '.mg_author a').text(),
            host: host
        })
    });

    return Response.success(data);
}
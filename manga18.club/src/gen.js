load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://manga18.club';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '.recoment_box .story_item');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.mg_name > a').text(),
            link: $.Q(e, '.mg_name > a').attr('href'),
            cover: $.Q(e, '.story_images img').attr('src'),
            description: $.Q(e, 'div.mg_chapter > div.item > div.chapter_count > a[href]').text(),
            host: host
        })
    });

    // log(data);
    var next = $.Q(doc, '.section_pagination li.active + li > a').text();
    return Response.success(data, next);
}
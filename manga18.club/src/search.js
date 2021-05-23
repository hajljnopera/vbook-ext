load('libs.js');

function execute(key, page) {
    var host = 'https://manga18.club';
    page = page || '1';
    var http = Http.get(host + '/list-manga/' + page).params({'search': key});
    var doc = http.html();
    var data = [];

    var elems = $.QA(doc, '.recoment_box .story_item');
    if (!elems.length) return Response.error(key);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.mg_name > a').text(),
            link: $.Q(e, '.mg_name > a').attr('href'),
            cover: $.Q(e, '.story_images img').attr('src'),
            description: $.Q(e, 'div.mg_chapter > div.item > div.chapter_count > a[href]').text(),
            host: host
        })
    })

    var next = $.Q(doc, '.section_pagination li.active + li > a').text();
    if (next) return Response.success(data, next);
    return Response.success(data);
}
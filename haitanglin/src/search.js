load('libs.js');

function execute(key, page) {
    var host = 'https://www.haitanglin.com';
    var doc = Http.post(host + '/modules/article/search.php').params({
        'searchtype': 'articlename',
        'searchkey': key
    }).html();

    var data = [];

    var elems = $.QA(doc, '#jieqi_page_contents > .c_row');
    if (!elems.length) return Response.error(key);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.c_subject > a').text(),
            link: $.Q(e, '.fl > a').attr('href'),
            cover: $.Q(e, '.fl img').attr('src') || 'https://www.haitanglin.com/modules/article/images/nocover.jpg',
            description: '',
            host: host
        })
    })

    return Response.success(data)
}
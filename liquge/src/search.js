load('libs.js');

function execute(key, page) {
    var host = 'http://www.liquge.com';
    var doc = Http.post(host + '/modules/article/search.php').params({
        'searchtype': 'all',
        'searchkey': key,
        't_btnsearch': ''
    }).html();

    var data = [];

    var elems = $.QA(doc, '#jieqi_page_contents > .c_row');
    if (!elems.length) return Response.error(key);

    var imgErr = 'http://www.liquge.com/modules/article/images/nocover.jpg';

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.c_subject > a').text(),
            link: $.Q(e, '.fl > a').attr('href'),
            cover: $.Q(e, '.fl img').attr('src'),
            description: '',
            host: host
        })
    })

    return Response.success(data)
}
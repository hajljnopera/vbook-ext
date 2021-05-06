load('libs.js');

function execute(url, page) {
    var host = 'http://www.quanben.io';
    page = page || '1';
    url = String.format(host + url, page);
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'div.list2');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'h3 > a > span').text(),
            link: $.Q(e, 'h3 > a').attr('href'),
            cover: $.Q(e, 'img').attr('src'),
            description: $.Q(e, 'p').text(),
            host: host
        })
    })

    var next = $.Q(doc, 'span.cur_page').text().match(/(\d+)/);
    if (next && next[1]) next = parseInt(next[1], 10) + 1;

    return Response.success(data, next.toString())
}
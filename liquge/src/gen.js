load('libs.js');

function execute(url, page) {
    var host = 'http://www.liquge.com';

    var url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'div.blockcontent > div.c_row.cf');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.c_subject > a', 1).text(),
            link: $.Q(e, 'div.fl > a').attr('href'),
            cover: $.Q(e, 'div.fl > a > img').attr('src'),
            description: $.Q(e, 'div.c_subject > a', 2).text(),
            host: host
        })
    })

    var next = '', m;
    if ((m = $.Q(doc, '#pagestats').text().match(/(\d+)\//)) && m[1])
        next = parseInt(m[1], 10) + 1;

    return Response.success(data, next.toString());
}
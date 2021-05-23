load('libs.js');

function execute(url, page) {
    var baseUrl = 'http://book.zongheng.com/store/c{0}/c0/b0/u0/p{1}/v9/s9/t0/u0/i1/ALL.html';
    var newUrl = String.format(baseUrl, url, page || 1);
    // log(newUrl);
    var doc = Http.get(newUrl).html();
    var data = [];
    
    var elems = $.QA(doc, '.store_list_wrap .bookbox');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.bookname > a').text(),
            link: $.Q(e, '.bookname > a').attr('href'),
            cover: $.Q(e, '.bookimg img').attr('src'),
            description: $.Q(e, '.bookupdate > a').text().replace('最新章节：', ''),
            host: 'http://book.zongheng.com'
        })
    })

    // log(data.length);

    var next = $.Q(doc, '.pagebox a.active + a').text();
    if (next) return Response.success(data, next);

    return Response.success(data);
}
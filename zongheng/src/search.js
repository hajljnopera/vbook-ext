load('libs.js');

function execute(key, page) {
    page = page || '1';
    var doc = Http.get('http://search.zongheng.com/s').params({'keyword': key, 'pageNo': page, 'sort': '', 'isFromHuayu': ''}).html()

    var data = [];
    
    var elems = $.QA(doc, '.search-result-list');
    if (!elems.length) return Response.error(key);

    var imgError = 'http://static.zongheng.com/upload/fm_big.gif';

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'h2.tit > a').text().trim(),
            link: $.Q(e, 'h2.tit > a').attr('href'),
            cover: $.Q(e, '.imgbox img').attr('src') || imgError,
            host: ''
        })
    })

    // log(data);
    var next = $.Q(doc, '.search_d_pagesize > a.active + a').text();

    return Response.success(data, next);
}
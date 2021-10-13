load('libs.js');

function execute(url) {
    var host = 'https://www.soxscc.cc';
    url = correctUrl(url, host);
    // log(url);

    var doc = Http.get(url).html();

    var author = $.Q(doc, '.xiaoshuo a[href*="/author/"]').text().trim();
    var lastUpdated = $.QA(doc, '.xiaoshuo h5', {f: x => x.text().includes('更新时间'), m: x => x.text(), j: ' '});

    return Response.success({
        name: $.Q(doc, '.xiaoshuo > h1').text(),
        cover: $.Q(doc, '.book_cover img').attr('src').mayBeFillHost(host),
        author: author,
        description: $.Q(doc, '#intro', {remove: '.tags, q'}).html(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}

// https://m.soxs.cc/book/WuGeXiaoHuaNvShenDuMenJiaoWoBa.html
// https://www.soxs.cc/WuGeXiaoHuaNvShenDuMenJiaoWoBa
function correctUrl(url, host) {
    var s = url.match(/(([A-Z][a-z\d]{0,10})+)/)[1];
    return host + '/' + s;
}
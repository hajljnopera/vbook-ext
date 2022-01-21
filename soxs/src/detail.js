load('libs.js');

function execute(url) {
    var host = 'https://www.soxscc.cc';
    url = correctUrl(url, host);
    // log(url);

    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();

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
    return null;
}

// https://m.soxs.cc/book/KangZhanTieXueLu_BaQianLiLuTieYuXue.html
// --> https://www.soxs.cc/KangZhanTieXueLu_BaQianLiLuTieYuXue
function correctUrl(url, host) {
    var s = url.match(/(([_A-Z][a-z\d]{0,10})+)/)[1];
    return host + '/' + s;
}
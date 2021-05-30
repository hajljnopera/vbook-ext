load('libs.js');

function execute(url) {
    var host = urlGetHost(url);
    url = url.replace('//m.', '//www.').append('/');
    var doc = Http.get(url).html();

    var infoEl = $.Q(doc, '#maininfo');
    var author = $.Q(infoEl, '#info > h1 + p > a').text().trim();

    return Response.success({
        name: $.Q(infoEl, '#info > h1').text(),
        cover: $.Q(infoEl, '#fmimg img').attr('src'),
        author: author,
        description: $.Q(infoEl, '#intro').html(),
        detail: '作者: ' + author + '<br>' + $.QA(infoEl, '#info p', {f: x => x.text().includes('更新时间'), m: x => x.text().trim(), j: ' '}),
        host: host
    })
}
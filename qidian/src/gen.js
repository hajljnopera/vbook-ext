load('libs.js');

function execute(url, page) {
    var host = 'https://www.qidian.com';
    url = String.format(host + url, page || 1);

    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '#rank-view-list > div > ul > li');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.book-mid-info > h4 > a').text(),
            link: $.Q(e, 'div.book-mid-info > h4 > a').attr('href').mayBeFillHost(host),
            cover: $.Q(e, 'div> a > img').attr('src').mayBeFillHost(host),
            description: $.Q(e, 'div.book-mid-info > p.update > a').text().replace('最新更新', '').trim(),
            host: host
        })
    })

    var next = $.Q(doc, '#rank-view-list > div > ul > li:nth-child(1) > div.book-img-box > span').text();
    if (next) next = 2 + parseInt(parseInt(next)/20); // 20 items/page
    
    return Response.success(data, next)
}
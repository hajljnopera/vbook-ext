load('libs.js');

function execute(url, page) {
    var host = 'https://www.qidian.com';

    url = (host + url).formatUnicorn({
        page: page || 1,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
    });

    // log(url);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, '#rank-view-list > div > ul > li');
        if (!elems.length) return null;

        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, '.book-mid-info h2 a').text(),
                link: $.Q(e, '.book-mid-info h2 a').attr('href').mayBeFillHost(host),
                cover: $.Q(e, 'div a img').attr('src').mayBeFillHost(host),
                description: $.Q(e, '.book-mid-info p.update a').text().replace('最新更新', '').trim(),
                host: host
            })
        })

        var next = $.Q(doc, '#rank-view-list .rank-tag', -1).text();
        // log(next);

        if (next) next = +next/20 + 1; // 20 items/page
        
        return Response.success(data, next);
    }
    return null;
}
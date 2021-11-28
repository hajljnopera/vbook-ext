load('libs.js');

function execute(url, page) {
    var host = 'https://www.qidian.com';

    let response = fetch(url, {
        method: "GET",
        queries: {
            'chanId': url,
            'orderId': '',
            'style': 1,
            'pageSize': 20,
            'siteid': 1,
            'pubflag': 0,
            'hiddenField': 0,
            'page': page || '1',
        }
    });
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, 'li[data-rid]');
        if (!elems.length) return Response.error(url);

        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, 'div.book-mid-info > h4 > a').text(),
                cover: $.Q(e, 'div.book-img-box img').attr('src').mayBeFillHost(host),
                link: $.Q(e, 'div.book-mid-info > h4 > a').attr('href').mayBeFillHost(host),
                description: $.Q(e, 'p.author').text(),
                host: host
            })
        })

        var next = $.Q(doc, 'a.lbf-pagination-page.lbf-pagination-current').text();
        if (next) next = parseInt(next, 10) + 1;

        return Response.success(data, next.toString());
    }
    return null;
}
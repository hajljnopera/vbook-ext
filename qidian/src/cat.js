load('libs.js');

function execute(url, page) {
    let host = 'https://www.qidian.com';

    url = String.format('https://www.qidian.com/all/chanId{0}-page{1}/', url, page);

    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let data = [];

        let elems = $.QA(doc, 'li[data-rid]');
        if (!elems.length) return Response.error(url);

        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, '.book-mid-info h2 a').text(),
                cover: $.Q(e, '.book-img-box img').attr('src').mayBeFillHost(host),
                link: $.Q(e, '.book-mid-info h2 a').attr('href').mayBeFillHost(host),
                description: $.Q(e, 'p.author').text(),
                host: host
            })
        })

        let next = $.Q(doc, 'a.lbf-pagination-page.lbf-pagination-current').text();
        if (next) next = parseInt(next, 10) + 1;

        return Response.success(data, next.toString());
    }
    return null;
}
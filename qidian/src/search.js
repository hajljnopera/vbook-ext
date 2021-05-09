load('libs.js');

function execute(key, page) {

    var host = 'https://www.qidian.com';
    var doc = Http.get('https://www.qidian.com/search').params({'kw': key}).html();

    var data = [];

    var elems = $.QA(doc, 'li.res-book-item');
    if (!elems.length) return Response.error(key);

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.book-mid-info > h4 > a').text(),
            cover: $.Q(e, 'div.book-img-box img').attr('src').mayBeFillHost(host),
            link: $.Q(e, 'div.book-mid-info > h4 > a').attr('href').mayBeFillHost(host),
            description: $.Q(e, 'p.author').text(),
            host: host
        })
    })

    return Response.success(data)
}
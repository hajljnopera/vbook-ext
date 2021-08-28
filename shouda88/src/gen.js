  
load('libs.js');

function execute(url, page) {
    var host = 'https://www.shouda88.com';
    if (!page) page = '1';
    url = String.format('{0}/{1}/{2}.html', host, url, page);
    var doc = Http.get(url).html();

    var m, next;
    var currentPage = $.Q(doc, 'div.pagelink > a[style]').text();
    if (currentPage && (m = currentPage.match(/(\d+)/)) && m[1]) {
        next = parseInt(m[1], 10) + 1;
    }

    var data = [];

    var elems = $.QA(doc, '#alist > div#alistbox');

    if (!elems.length) return Response.error(url);

    var imgErr = host + '/static/image/nocover.jpg';

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.title > h2 > a').text(),
            link: $.Q(e, 'div.title > h2 > a').attr('href'),
            cover: $.Q(e, 'div.pic img').attr('src').mayBeFillHost('https://img.shouda88.com') || imgErr,
            description: $.Q(e, 'div.sys > li > a').text(),
            host: host
        })
    })

    if (next) return Response.success(data, next.toString());

    return Response.success(data);
}
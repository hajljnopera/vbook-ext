load('libs.js');
load('config.js');

function execute(url, page) {
    url = String.format(BASE_URL + url, page || '1');

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html('gbk');

    let data = [];

    let elems = $.QA(doc, 'table.grid tbody tr:not([align])');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        let link = $.Q(e, 'a').attr('href');
        let m, id, cover;

        if ((m = link.match(/(\d+)\.html/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', BASE_URL, Math.floor(id / 1000), id, id);
            // https://www.ptwxz.com/files/article/image/12/12450/12450s.jpg
        }

        data.push({
            name: $.Q(e, 'a').text(),
            link: link,
            cover: cover || BASE_URL + '/modules/article/images/nocover.jpg',
            description: $.Q(e, 'td.odd', 1).text(),
            host: BASE_URL
        })
    })

    let next = $.Q(doc, '#pagelink strong + a').text();

    return Response.success(data, next);
}
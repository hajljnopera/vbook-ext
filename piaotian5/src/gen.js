load('libs.js');
load('config.js');

function execute(url, page) {
    let response = fetch(BASE_URL + url);
    if (!response.ok) return null;

    let doc = response.html();
    let data = [];

    let elems = $.QA(doc, '.l.bd li');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        let link = $.Q(e, '.s2 a').attr('href');
        let m, id, cover;

        if ((m = link.match(/book\/(\d+)/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', BASE_URL, Math.floor(id / 1000), id, id);
            // https://www.piaotian5.com/files/article/image/9/9357/9357s.jpg
        }

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link.append('/'),
            cover: cover || BASE_URL + '/images/nocover.jpg',
            description: $.Q(e, '.s3 a').text(),
            host: BASE_URL
        })
    })

    return Response.success(data);
}
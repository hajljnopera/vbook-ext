load('libs.js');

function execute(url, page) {
    var host = 'https://www.xbiquge.cc';
    var doc = Http.get(host + url).html('gbk');
    var data = [];

    var elems = $.QA(doc, '#newscontent .l li');
    if (!elems.length) return Response.error(url);
    
    var imgErr = host + '/modules/article/images/nocover.jpg'

    elems.forEach(function(e) {
        var link = $.Q(e, '.s2 a').attr('href');
        var m, id, cover;

        if ((m = link.match(/book\/(\d+)/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
            // https://www.xbiquge.cc/files/article/image/51/51918/51918s.jpg
        }

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link.append('/'),
            cover: cover || imgErr,
            description: $.Q(e, '.s3 a').text(),
            host: host
        })
    })

    return Response.success(data)
}
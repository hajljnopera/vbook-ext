load('libs.js');

function execute(url, page) {
    var host = 'https://www.biqugee.com';

    var doc = Http.get(host + url).html();
    var data = [];

    var elems = $.QA(doc, '#newscontent .l li');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        var link = $.Q(e, '.s2 a').attr('href');
        var m, id, cover;

        if ((m = link.match(/book\/(\d+)/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/cover/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
        }

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link.append('/'),
            cover: cover || 'https://www.biqugee.com/images/nocover.jpg',
            description: $.Q(e, '.s3 a').text(),
            host: host
        })
    })

    return Response.success(data)
}
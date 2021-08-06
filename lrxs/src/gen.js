load('libs.js');

function execute(url, page) {
    var host = 'https://www.lrxs.org';
    if (!page) page = '1';
    url = String.format(host + url, page);
    var doc = Http.get(url).html('gbk');

    var data = [];

    var elems = $.QA(doc, '#newscontent .l li');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        var link = $.Q(e, '.s2 a').attr('href');
        var m, id, cover;

        if ((m = link.match(/_(\d+)/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{2}s.jpg', host, Math.floor(id / 1000), id);
        }

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link.append('/'),
            cover: cover || '',
            description: $.Q(e, '.s3 a').text(),
            host: host
        })
    })

    var next = $.Q(doc, '#pagelink > strong + a').text();
    if (next && /\d+/.test(next)) return Response.success(data, next);
    
    return Response.success(data);
}
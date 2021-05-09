load('libs.js');

function execute(url, page) {
    var host = 'https://www.nofff.com';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html('gbk');
    var data = [];

    var elems = $.QA(doc, '#newscontent li');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        var link = $.Q(e, '.s2 a').attr('href');
        var m, id, cover;
        if ((m = link.match(/(\d+)/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/Bookimg/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
            // https://www.nofff.com/Bookimg/0/3/3s.jpg
        }

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link,
            cover: cover || 'https://www.nofff.com/modules/article/images/nocover.jpg',
            description: $.Q(e, '.s5').text(),
            host: host
        })
    })

    var next = $.Q(doc, '#pagelink strong + a').text();

    return Response.success(data, next)
}
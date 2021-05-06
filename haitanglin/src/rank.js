load('libs.js');

function execute(url, page) {
    var host = 'https://www.haitanglin.com';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'div.right li:not([class])');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        var link = $.Q(e, '.s1 a').attr('href');
        var m, id, cover;
        if ((m = link.match(/(\d+)\.html/)) && m[1] && (id = m[1])) {
            cover = String.format('http://img.haitanglin.com/image/{0}/{1}/{2}s.jpg', Math.floor(id / 1000), id, id);
            // http://img.haitanglin.com/image/45/45050/45050s.jpg
        }

        data.push({
            name: $.Q(e, '.s1 a').text(),
            link: link,
            cover: cover || 'https://www.haitanglin.com/modules/article/images/nocover.jpg',
            description: $.Q(e, '.s3').text(),
            host: host
        })
    })

    var next = $.QA(doc, '#pagelink strong', {f: x => !x.text().includes('/')})[0].text().trim();
    if (next) next = parseInt(next, 10) + 1;

    return Response.success(data, next.toString())
}
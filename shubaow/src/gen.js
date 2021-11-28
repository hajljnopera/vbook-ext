load('libs.js');

function execute(url, page) {
    var host = 'https://www.shubaow.net';

    var response = fetch(host + url);
    if (response.ok) {
        var doc = response.html('gbk');

        var data = [];

        var elems = $.QA(doc, '#newscontent .l li');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            var link = $.Q(e, '.s2 a').attr('href');
            var m, id, cover;

            if ((m = link.match(/\/\d+[_](\d+)\/?/)) && m[1] && (id = m[1])) {
                cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id); 
                // https://www.shubaow.net/files/article/image/2/2575/2575s.jpg
            }

            data.push({
                name: $.Q(e, '.s2 a').text(),
                link: $.Q(e, '.s2 a').attr('href').append('/'),
                cover: cover || '',
                description: $.Q(e, '.s3 a').text(),
                host: host
            })
        })

        return Response.success(data);
    }
    return null;
}
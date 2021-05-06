load('libs.js');

function execute(url, page) {
    var host = 'https://www.bxwxorg.com';

    if (url == '/') {
        url = host;
    }
    else {
        url = String.format('https://www.bxwxorg.com/{0}/{1}.html', url, page || '1');
    }
    
    var doc = Http.get(url).html();
    var data = [];
    var imgErr = host + '/static/image/nocover.jpg';

    var elems = $.QA(doc, '#newscontent .l li');

    if (!elems.length) elems = $.QA(doc, 'div.novelslist2 li');

    elems.forEach(function(e) {
        var link = $.Q(e, '.s2 a').attr('href');
        if (!link) return;

        var doc2 = Http.get(link).html();
        var cover = $.Q(doc2, 'meta[property="og:image"]').attr('content');

        data.push({
            name: $.Q(e, '.s2 a').text(),
            link: link,
            cover: cover || imgErr,
            description: $.Q(e, '.s3 a').text(),
            host: host
        })
    })

    if (url == host) return Response.success(data);

    var next = $.Q(doc, 'div.pagelink > strong').text().match(/(\d+)/);
    if (next && next[1]) next = parseInt(next[1], 10) + 1;

    return Response.success(data, next.toString())
}
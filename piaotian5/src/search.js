load('libs.js');

function execute(key, page) {
    var host = 'https://www.piaotian5.com';
    var searchUrl = '{0}/s.php?ie=gbk&q={1}';
    var http = Http.get(String.format(searchUrl, host, key));
    var doc = http.html('gbk');

    var data = [];

    var elems = $.QA(doc, '.bookbox');
    if (elems.length) {
        elems.forEach(function(e) {
            var link = $.Q(e, 'a').attr('href');
            data.push({
                name: $.Q(e, '.bookname a').text().trim(),
                link: $.Q(e, '.bookname a').attr('href'),
                cover: $.Q(e, '.bookimg img').attr('src'),
                description: $.Q(e, '.cat').text(),
                host: host
            })
        })

        return Response.success(data);
    }

    return Response.error(key);
}
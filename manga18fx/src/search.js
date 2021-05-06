load('libs.js');

function execute(key, page) {
    var host = 'https://manga18fx.com';
    var http = Http.get('https://manga18fx.com/search').params({'q': key});
    var doc = http.html();

    var data = [];

    var elems = $.QA(doc, 'div.page-item');
    if (elems.length) {
        elems.forEach(function(e) {
            var link = $.Q(e, 'a').attr('href');
            data.push({
                name: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').text(),
                link: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').attr('href'),
                cover: $.Q(e, 'div.bsx-item > div.thumb-manga > a > img').attr('src'),
                description: $.Q(e, 'div.bsx-item .list-chapter .chapter > a').text(),
                host: host
            })
        })

        return Response.success(data);
    }

    return Response.error(key);
}
load('libs.js');

function execute(url, page) {
    var host = 'https://czbooks.net';
    var url = String.format(host + url, page || '1');
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, '.container .novel-item');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, '.novel-item-title').text(),
                link: $.Q(e, 'a').attr('href').mayBeFillHost(host),
                cover: $.Q(e, '.novel-item-thumbnail img').attr('src'),
                description: $.Q(e, '.novel-item-newest-chapter').text().replace('最新:', ''),
                host: host
            })
        })

        var next = $.Q(doc, '.nav.paginate li.active + li').text();
        if (next) {
            return Response.success(data, next);
        }

        return Response.success(data);
    }
    return null;
}
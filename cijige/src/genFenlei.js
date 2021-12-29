load('libs.js');

function execute(url, page) {
    var host = 'https://www.cijige.com';
    var url = String.format(host + url, page || '1');
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, '#sort_newbook .sort_list');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, '.title a').text().replace('《', '').replace('》', ''),
                link: $.Q(e, '.title a').attr('href').mayBeFillHost(host),
                cover: $.Q(e, '.fm img').attr('src'),
                description: $.Q(e, '.title span').text(),
                host: host
            })
        })

        var next = $.Q(doc, '.pages span + a').text();
        if (next) {
            return Response.success(data, next);
        }

        return Response.success(data);
    }
    return null;
}
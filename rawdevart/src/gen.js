load('libs.js');

function execute(url, page) {
    var host = 'https://rawdevart.com';
    url = String.format(host + url + '?page={0}', page || '1');
    // log(url);
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        var elems = $.QA(doc, 'div.container div.card-body div.card');
        if (!elems.length) return null;
        
        var data = [];
        elems.forEach(function(e) {
            data.push({
                description: $.Q(e, 'div.title > span > small').text().trim(),
                name: $.Q(e, 'div.title > span', {remove: 'small'}).text().trim(),
                link: $.Q(e, 'a').attr('href'),
                cover: $.Q(e, 'img.img-fluid').attr('src'),
                host: host
            })
        });

        var next = $.Q(doc, 'li.page-item.active').text();
        next = parseInt(next, 10) + 1;

        if (next.toString() == page) return Response.success(data);

        return Response.success(data, next.toString());
    }

    return null;
}
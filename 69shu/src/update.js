load('libs.js');
load('config.js');

function execute(url, page) {
    url = BASE_URL + url;

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        var data = [];

        var elems = $.QA(doc, 'div.recentupdate2 > ul > li');
        if (!elems.length) return Response.error(url);

        elems.forEach(function(e) {
            var link = $.Q(e, 'a').attr('href');
            var m, id, cover;

            if ((m = link.match(BASE_URL + /.+\/book\/(.*?)\.htm/)) && m[1] && (id = m[1])) {
                cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', "https://cdn.shucdn.com", Math.floor(id / 1000), id, id);
            }

            data.push({
                name: $.Q(e, 'a').text(),
                link: link,
                cover: cover || '',
                description: $.Q(e, 'a', 1).text(),
                host: BASE_URL
            })
        })

        return Response.success(data);
    }
    return null;
}
load('libs.js');

function execute(key, page) {
    let host = 'https://www.630shu.net';
    let searchUrl = '{0}/modules/article/search.php?searchtype=articlename&searchkey={1}&action=login';

    let gbkEncode = function(s) {
        load('gbk.js');
        return GBK.encode(s);
    }

    let response = fetch(String.format(searchUrl, host, gbkEncode(key)));
    if (response.ok) {
        let doc = response.html('gbk');
        let data = [];

        let elems = $.QA(doc, 'table tr:not([align])');
        if (elems.length) {
            elems.forEach(function(e) {
                let link = $.Q(e, 'a').attr('href');
                data.push({
                    name: $.Q(e, 'a').text().trim(),
                    link: $.Q(e, 'a').attr('href'),
                    cover: genCover(link),
                    description: $.Q(e, 'td.odd', 1).text(),
                    host: host
                })
            })

            return Response.success(data);
        }

        if ($.Q(doc, '#picbox > div.img_in > img').attr('src')) { // detail.js
            return Response.success([{
                name: $.Q(doc, '#info > h1').text(),
                link: $.Q(doc, 'head > link').attr('href'), //
                cover: $.Q(doc, '#picbox > div.img_in > img').attr('src'),
                description: $.Q(doc, '#info > div.options > span:nth-child(1) > a').text().trim(), // author
                host: host
            }]);
        }

        return Response.error(key);
    }
    return null;
}

function genCover(bookUrl) {
    let host = 'https://www.630shu.net', m, id;

    if ((m = bookUrl.match(/(\d+)\.html$/)) && m[1] && (id = m[1])) {
        // https://www.630shu.net/files/article/image/184/184279/184279s.jpg
        return String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
    }

    return 'https://www.630shu.net/modules/article/images/nocover.jpg';
}
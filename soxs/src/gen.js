load('libs.js');
load('config.js');

const options = {
    loadCover: true
}

function execute(url, page) {
    if (!page) page = '1';
    var hasNextPage = url != '/';
    var newUrl = String.format(BASE_URL + url + (page == '1' ? '' : '{0}.html'), page);
    log(newUrl);

    var response = fetch(newUrl);
    if (response.ok) {
        var doc = response.html();
        var data = [];

        var elems = $.QA(doc, '#newscontent > .l li');
        if (!elems.length) return Response.error(url);

        var imgErr = BASE_URL + '/static/image/nocover.jpg';

        elems.forEach(function(e) {
            var link = $.Q(e, '.s2 > a').attr('href');
            data.push({
                name: $.Q(e, '.s2 > a').text(),
                link: link,
                cover: genCover(link) || imgErr,
                description: $.Q(e, '.s3 > a').text(),
                host: BASE_URL
            })
        })

        // log(data);

        if (!hasNextPage) {
            return Response.success(data);
        }

        var m, next;
        var currentPage = $.Q(doc, 'div.pagelink > a.pgchu').text();
        if (currentPage && (m = currentPage.match(/(\d+)/)) && m[1]) {
            next = parseInt(m[1]) + 1;
        }
        else {
            next = 2;
        }

        return Response.success(data, next.toString());
    }
    return null;
}

function genCover(link) {
    if (!options.loadCover) {
        return BASE_URL + '/tpl/pc/image/logo.gif';
    }

    var response = fetch(BASE_URL + link);
    if (response.ok) {
        var doc = response.html();
    
        var img = $.Q(doc, 'meta[property="og:image"]').attr('content');
        if (img) return img.prepend('https:');
    }

    return '';
}
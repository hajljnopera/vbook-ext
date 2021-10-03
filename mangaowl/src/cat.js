load('libs.js');

function execute(url, page) {
    var host = 'https://mangaowl.net';
    url = String.format(host + url, page || 1);
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '.container .comicView[data-id]');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        data.push({
            name: e.attr('data-title'),
            link: $.Q(e, 'a').attr('href'),
            cover: $.Q(e, '.img-responsive').attr('data-background-image'),
            description: $.Q(e, '.tray-item').text(),
            host: host
        })
    });

    // log(data);

    var currentPage, totalPages;

    var scripts = $.QA(doc, 'script:not([src], [type])');
    if (scripts && scripts.length) {
        for(var i = 0; i < scripts.length; i++) {
            var code = scripts[i].html();
            if (code.includes('#pagination-search')) {
                currentPage = code.match(/currentPage\s*:\s*(\d+)/)[1];
                // log(currentPage);
                totalPages = code.match(/items\s*:\s*(\d+)/)[1];
                // log(totalPages);
                break;
            }
        }
    }

    if (currentPage && totalPages && currentPage < totalPages) {
        return Response.success(data, (parseInt(currentPage, 10) + 1).toString());
    }

    return Response.success(data);
}
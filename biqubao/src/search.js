load('libs.js');

function execute(key, page) {
    var host = 'https://www.biqugee.com';
    page = page || '1';
    var searchUrl = '{0}/search.php?q={1}&p={2}';
    var response = fetch(String.format(searchUrl, host, key, page));
    
    if (response.ok) {
        var doc = response.html();
        var data = [];

        var elems = $.QA(doc, '.result-item');
        if (elems.length) {
            elems.forEach(function(e) {
                data.push({
                    name: $.Q(e, 'a[cpos=title]').text().trim(),
                    link: $.Q(e, 'a[cpos=title]').attr('href'),
                    cover: $.Q(e, 'a[cpos=img] > img').attr('src'),
                    description: $.Q(e, 'p.result-game-item-info-tag').text(),
                    host: host
                })
            })
            // log(data);

            var next = $.Q(doc, '.search-result-page-main > a.current + a').text();
            return Response.success(data, next);
        }
        return Response.error(key);
    }
    return null;
}
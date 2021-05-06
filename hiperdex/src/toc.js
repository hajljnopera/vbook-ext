load('libs.js');

function execute(url) {
    var host = 'https://hiperdex.com';
    var doc = Http.get(url).html();
    var shortlink = $.Q(doc, 'link[rel=shortlink]').attr('href');

    var m = shortlink.match(/p=(\d+)/);

    if (m && m[1]) {
        var res = Http.post("https://hiperdex.com/wp-admin/admin-ajax.php").params({
            action:  "manga_get_chapters",
            manga: m[1]
        }).html();

        var elems = $.QA(Html.parse(res), 'div.listing-chapters_wrap li > a', {reverse: true});

        var data = [];
        elems.forEach(function(e) {
            data.push({
                name: e.text().trim(),
                url: e.attr('href').trim(),
                host: host
            })
        })

        if (data.length) return Response.success(data);
    }

    return Response.error(url);
}
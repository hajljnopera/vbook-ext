load('libs.js');

function execute(url) {
    var host = 'https://hiperdex.com';

    var ajaxUrl = url.rtrim('/') + '/ajax/chapters/';
    // log(ajaxUrl);
    var res = Http.post(ajaxUrl).html();
    // log(res);

    var elems = $.QA(Html.parse(res), '.listing-chapters_wrap li > a', {reverse: true});

    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: e.text().trim(),
            url: e.attr('href').trim(),
            host: host
        })
    })

    if (data.length) return Response.success(data);

    return Response.error(url);
}
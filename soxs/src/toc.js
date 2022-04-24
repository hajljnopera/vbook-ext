load('libs.js');
load('config.js');

function execute(url) {
    url = correctUrl(url);
    // log(url);
    
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();

        var data = [];
        var elems = $.QA(doc, '.novel_list[id] dd > a');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            data.push({
                name: e.text(),
                url: e.attr('href'),
                host: BASE_URL
            })
        });

        return Response.success(data);
    }
    return null;
}

// https://m.soxs.cc/book/KangZhanTieXueLu_BaQianLiLuTieYuXue.html
// --> https://www.soxs.cc/KangZhanTieXueLu_BaQianLiLuTieYuXue
function correctUrl(url) {
    var s = url.match(/(([_A-Z][a-z\d]{0,10})+)/)[1];
    return BASE_URL + '/' + s;
}
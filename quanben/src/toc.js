load('libs.js');

function execute(url) {
    var host = 'http://quanben.io';
    url = url.replace(/quanben\.io\/n\/([^\/]+)\/?$/, 'quanben.io/n/$1/list.html');
    // log(url);
    var browser = Engine.newBrowser();
    browser.launch(url, 10*1000);

    var sc = 'document.querySelector(".content_more > .more > a").click();';
    browser.callJs(sc, 5*1000);
    browser.callJs(sc, 5*1000);

    var doc = browser.html();
    var data = [];
    var elems = $.QA(doc, 'li[itemprop=itemListElement] > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'span').text(),
            url: e.attr('href'),
            host: host
        })
    });

    log(data);
    browser.close();

    return Response.success(data);
}
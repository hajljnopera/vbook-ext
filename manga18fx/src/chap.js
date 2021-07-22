load('libs.js');

function execute(url) {

    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }

    var elems = $.QA(doc, 'div.read-content img');
    if (!elems.length) return Response.error(url);
    
    var imgs = elems.map(function(e){
        return e.attr('src') || '';
    });
    
    return Response.success(imgs);
}

function fetchDOM(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 15*1000);
    var doc = browser.html();
    browser.close();
    return doc;
}
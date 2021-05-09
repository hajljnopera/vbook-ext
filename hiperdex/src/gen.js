load('libs.js');

function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://hiperdex.com/';

    var browser = Engine.newBrowser();
    browser.launch(host, 10*1000);
    browser.callJs('console.log(document.location.href);', 2*1000);
    browser.callJs('console.log(document.location.href);', 2*1000);
    browser.callJs('console.log(document.location.href);', 2*1000);

    browser.callJs('document.querySelector("html").innerText = document.location.href;', 1*1000);
    var doc = browser.html();
    log($.Q(doc, 'html').text());
    // url = String.format(host + url, page);
    // var doc = Http.get(url).html();
    // var data = [];
    
    // var elems = $.QA(doc, 'div.page-item-detail.manga');
    // if (!elems.length) return Response.error(url);

    // elems.forEach(function(e) {
    //     data.push({
    //         name: $.Q(e, 'div.item-summary h3 > a').text(),
    //         link: $.Q(e, 'div.item-summary h3 > a').attr('href'),
    //         cover: $.Q(e, 'div.item-thumb > a > img').attr('src'),
    //         description: $.Q(e, 'div.list-chapter a.btn-link').text(),
    //         host: host
    //     })
    // });

    // var next = $.Q(doc, 'span.current + a').text();

    // return Response.success(data, next);
}
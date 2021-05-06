load('libs.js');

function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 5*1000);

    browser.callJs("document.querySelector('#detail > div > a').click();", 1*1000);
    browser.callJs("document.querySelector('#detail > div > a').click();", 1*1000);

    var doc = browser.html();
    var htm = $.Q(doc, '#content', {remove: '#loading'}).html();
    htm = htm.replace(/<div[^>]*>(.*?)<\/div>/gm, '$1');

    browser.close();

    return Response.success(htm);
}
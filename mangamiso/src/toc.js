load('libs.js');

function execute(url) {
    var host = 'https://mangamiso.net';
    var data = [];

    var browser = Engine.newBrowser();
    browser.launch(url, 10*1000);
    browser.callJs('document.querySelector("html").innerText = JSON.stringify(__NUXT__);', 0.5*1000);
    var doc = browser.html();
    var json = $.Q(doc, 'html').text();
    var __NUXT__ = JSON.parse(json);

    __NUXT__.data[0].manga.chapters.forEach(function(chapter) {
        if (chapter.comingNext) return;
        data.push({
            name: 'Chapter ' + chapter.chapterNum,
            url: chapter.pathName,
            host: url
        })
    })
    
    data.reverse();

    return data.length ? Response.success(data) : Response.error(url);
}
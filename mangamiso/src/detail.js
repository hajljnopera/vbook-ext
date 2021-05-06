load('libs.js');

function execute(url) {
    var host = 'https://mangamiso.net';

    var browser = Engine.newBrowser();
    browser.launch(url, 10*1000);
    browser.callJs('document.querySelector("html").innerText = JSON.stringify(__NUXT__);', 0.5*1000);
    var doc = browser.html();
    var json = $.Q(doc, 'html').text();
    var __NUXT__ = JSON.parse(json);

    var author = __NUXT__.data[0].manga.author.map(x => titleCase(x.replace(/_/g, ' '))).join(', ');
    var artist = __NUXT__.data[0].manga.artist.map(x => titleCase(x.replace(/_/g, ' '))).join(', ');

    return Response.success({
        name: __NUXT__.data[0].manga.title,
        cover: __NUXT__.data[0].manga.coverImage,
        author: author,
        description: __NUXT__.data[0].manga.description,
        detail: String.format('Author: {0}<br>Artist: {1}', author, artist),
        host: host,
        ongoing: __NUXT__.data[0].manga.status == 'ongoing',
    });
}

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}
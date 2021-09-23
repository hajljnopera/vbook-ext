load('libs.js');

function execute(url) {
    var host = 'https://yurineko.net';

    var mangaId = url.match(/(\d+)/)[1];
    var apiUrl = 'https://api.yurineko.net/manga/' + mangaId;
    var json = Http.get(apiUrl).string();
    // log(json)
    var data = JSON.parse(json);

    var chapters = [];
    data.chapters.forEach(function(chapter) {
        chapters.push({
            name: chapter.name,
            url: url.append('/') + chapter.id,
            host: host
        })
    })

    chapters.reverse();
    // log(chapters)
    return chapters.length ? Response.success(chapters) : Response.error(chapters);
}
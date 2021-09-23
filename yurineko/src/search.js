load('libs.js');

function execute(key, page) {
    var host = 'https://yurineko.net';
    var http = Http.get('https://api.yurineko.net/search').params({'query': key, 'page': page | '1'});
    var json = http.string();
    // log(json);
    var data = JSON.parse(json);
    var mangas = [];

    data.result.forEach(manga => {
        mangas.push({
            name: manga.originalName,
            link: 'https://yurineko.net/manga/' + manga.id,
            cover: manga.thumbnail,
            description: manga.description,
            host: host
        })
    })

    if (mangas.length) return Response.success(mangas);

    return Response.error(key);
}
load('libs.js');

function execute(url) {
    var host = 'https://yurineko.net';

    var mangaId = url.match(/(\d+)/)[1];
    var apiUrl = 'https://api.yurineko.net/manga/' + mangaId;
    // log(apiUrl);
    var json = Http.get(apiUrl).string();
    // log(json);
    var data = JSON.parse(json);
    var author = data.author.length ? data.author[0].name : '';
    var team = data.team.length ? data.team[0].name: '';

    return Response.success({
        name: data.originalName,
        cover: data.thumbnail,
        author: author,
        description: data.description,
        detail: String.format('Tác giả: {0}<br>Nhóm dịch: {1}', author, team),
        host: host,
        ongoing: data.status == 4,
    });
}
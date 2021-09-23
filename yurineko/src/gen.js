load('libs.js');

function execute(url, page) {
    var host = 'https://yurineko.net';
    page = page || '1';
    var lastestApiUrl = 'https://api.yurineko.net/lastest2?page=' + page;
    // log(lastestApiUrl);
    var res = Http.get(lastestApiUrl).string();
    // log(res);
    var j = JSON.parse(res);
    var data = [];
    j.result.forEach(function(item) {
        data.push({
            name: item.originalName,
            link: 'https://yurineko.net/manga/' + item.id,
            cover: item.thumbnail,
            description: item.lastChapter ? item.lastChapter.name : '',
            host: host
        })
    })

    // log(data);
    return Response.success(data, (parseInt(page,10)+1).toString());
}
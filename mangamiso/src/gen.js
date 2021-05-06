load('libs.js');

function execute(url, page) {
    var host = 'https://mangamiso.net';
    page = page || '1';
    var res = Http.get(host + url).params({page: page, perPage: 50}).string();
    var j = JSON.parse(res);
    if (j.status == 200) {
        var data = [];
        j.newManga.forEach(function(item) {
            data.push({
                name: item.title,
                link: 'manga/' + item.pathName,
                cover: item.coverImage,
                description: 'Chapter' + item.chapters[item.chapters.length-1].chapterNum,
                host: host
            })
        })
        return Response.success(data, (parseInt(page,10)+1).toString());
    }
    
    return Response.error(url);
}
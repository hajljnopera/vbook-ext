load('libs.js');

function execute(key, page) {
    var host = 'https://manhwas.men';
    var http = Http.get('https://manhwas.men/search').params({'query': key});
    var res = http.string();
    var j = JSON.parse(res);
    var data = [];
    if (j.suggestions) {
        j.suggestions.forEach(item => {
            data.push({
                name: item.value,
                link: 'https://manhwas.men/manga/' + item.data,
                cover: genCover(item.data),
                description: '',
                host: host
            })
        });
        // log(data);
        return Response.success(data);
    }

    return Response.error(key);
}

function genCover(id) {
    return String.format('https://manhwas.men/uploads/manga/{0}/cover/cover_250x350.jpg', id);
}
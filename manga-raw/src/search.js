load('libs.js');

function execute(key, page) {
    var host = 'https://www.manga-raw.club';
    var http = Http.get('https://www.manga-raw.club/lmangasearch').params({'inputContent': key});
    var res = http.string();
    var j = JSON.parse(res);
    var data = [];
    if (j.success) {
        // log(j.resultview);
        var doc = Html.parse(j.resultview);
        var elems = $.QA(doc, '.novel-item > a');
        elems.forEach(e => {
            data.push({
                name: e.attr('title'),
                link: e.attr('href'),
                cover: $.Q(e, '.novel-cover > img').attr('src'),
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
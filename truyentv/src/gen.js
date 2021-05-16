load('libs.js');

function execute(url, page) {
    var host = 'http://truyentv.net';
    page = page || '1';
    var newUrl = String.format(host + url + (page == '1' ? '/' : '/page/{0}/'), page);
    var doc = Http.get(newUrl).html();
    var data = [];

    var elems = $.QA(doc, '.noibat');
    if (!elems.length) return Response.error(url);

    elems.forEach(function(e) {
        var name = $.Q(e, 'a > strong').text();
        if (name == '') return;
        data.push({
            name: name,
            link: $.Q(e, 'a').attr('href'),
            cover: randomCover(),
            description: $.Q(e, 'span').text(),
            host: host
        })
    })

    var next = $.Q(doc, 'span.page-numbers.current + a').text();
    if (next) return Response.success(data, next);

    return Response.success(data);
}

// https://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// (づ｡◕‿‿◕｡)づ
function randomCover() {
    return 'http://truyentv.net/anh/xinh' + getRandomInt(1, 8) + '.jpg';
}
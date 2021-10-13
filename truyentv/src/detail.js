load('libs.js');

function execute(url) {
    var host = 'http://truyensac.net';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, '.bai-viet-box h1 > a').text(),
        cover: randomCover(),
        author: $.Q(doc, '.bai-viet-box h1 > a', 1).text().replace('Tác giả', '').trim() || 'Sưu tầm',
        description: 'Nghiêm cấm trẻ em dưới 18 tuổi',
        detail: '',
        host: host
    });
}

// https://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// (づ｡◕‿‿◕｡)づ
function randomCover() {
    return 'https://truyensac.net/anh/anhgaifull/' + getRandomInt(1, 4500) + '.jpg';
}
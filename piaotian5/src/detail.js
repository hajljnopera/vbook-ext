load('libs.js');
load('config.js');

function execute(url) {
    url = url
    .replace('m.piaotian5.net', 'www.piaotian5.net')
    .replace('m.piaotian55.net', 'www.piaotian55.net')

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    let coverImg = $.Q(doc, '#fmimg img').attr('src');
    let author = $.Q(doc, '#info p').text().replace(/作.*者：/, '');

    return Response.success({
        url: url.rtrim('/'),
        name: $.Q(doc, '#info h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro').text().replace(/各位书友要是觉得.*?还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！/, '').trim(),
        detail: String.format('作者: {0}<br>{1}', author, $.Q(doc, '#info > p', 4).text()),
        host: BASE_URL
    });
}
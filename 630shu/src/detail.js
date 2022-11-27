load('libs.js');

function execute(url) {
    let host = 'https://www.630shu.net';

    // https://m.630shu.net/book_43404 --> https://www.630shu.net/shu/43404.html
    url = url.replace(/m\.630shu\.net\/(chapters|book)_(\d+)\/?$/gm, 'www.630shu.net/shu/$2.html');
    let block = '并且提供无弹窗阅读';

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html('gbk');

    let coverImg = $.Q(doc, '#picbox > .img_in > img').attr('src').mayBeFillHost(host);
    let author = $.Q(doc, '#info > .options > span:nth-child(1) > a').text().trim();
    let lastUpdated = $.Q(doc, '#info > .update').text();
    let description = $.Q(doc, '#intro').text();

    if (description.includes(block)) {
        const hahaha = ['( ͡° ͜ʖ ͡°)', '(´･_･`)', 'ఠ_ఠ', '?(*´･д･)ﾉ', 'ლ(ಠ_ಠ ლ)', '🤔🤔🤔', '👀👀👀'];
        description = hahaha[Math.floor(Math.random() * hahaha.length)];
    }

    return Response.success({
        name: $.Q(doc, '#info > h1').text(),
        cover: coverImg,
        author: author,
        description: description,
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host,
    });
}
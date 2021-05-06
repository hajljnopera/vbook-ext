load('libs.js');

function execute(url) {
    var host = 'https://hentairead.com';
    var doc = Http.get(url).html();
    
    var detailArr = $.QA(doc, '.post-content > div.post-content_item', {m: x => x.text()});
    detailArr.splice(0, 2);

    return Response.success({
        name: $.Q(doc, '.post-title > h1').text().trim(),
        cover: $.Q(doc, '.item-thumb-wrapper > img').attr('data-src').trim(),
        author: $.Q(doc, '.artist-content').text() || 'Unknown',
        description: 'Just FAP!!!',
        detail: detailArr.join('<br>'),
        host: host
    })
}

load('libs.js');

function execute(url) {
    var host = 'https://hiperdex.com';
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'div.post-title > h1').text().trim(),
        cover: $.Q(doc, 'div.summary_image > a > img').attr('src'),
        author: 'Unknown',
        description: $.Q(doc, 'div.summary__content').html(),
        detail: $.QA(doc, 'div.summary_content div.post-content_item', {m: x => x.text(), j: '<br>'}),
        host: host
    })
}
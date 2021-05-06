load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'div.content > h1.title').text().trim(),
        cover: $.Q(doc, 'img.athumbnail').attr('data-src').trim(),
        author: $.QA(doc, 'div.column.is-9 > div:nth-child(4) tr', {f: x => x.text().includes('Author:'), m: x => x.text().replace('Author:', '').trim(), j: ' '}) || 'Unknown',
        description: $.Q(doc, 'h2.title + div.content', {remove: ['strong', 'u', 'li', 'a', 'div.spoiler.display-none', 'h2.title']}).html(),
        detail: $.QA(doc, 'table:not([style]) > tbody > tr', {f: x => !x.text().includes('Alt'), m: x => x.text(), j: '<br>'}),
        host: 'https://mangayeh.com'
    });
}
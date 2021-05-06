load('libs.js');

function execute(url) {
    var host = 'https://www.shutxt.com';
    url = url.replace('m.shutxt.com', 'www.shutxt.com');
    var doc = Http.get(url).html();

	var author = $.QA(doc, '.xinxi li', {f: x => x.text().includes('作者：'), m: x => x.text().replace('作者：', '').trim(), j: ' '});

    return Response.success({
        name: $.Q(doc, '.booktitle h1').text(),
        cover: $.Q(doc, '.jianjie img').attr('src'),
        author: author,
        description: $.QA(doc, '.neirong > p', {m: x => x.text(), j: '<br>'}),
        detail: $.QA(doc, '.xinxi li', {m: x => x.text(), j: '<br>'}),
        host: host
    });
}
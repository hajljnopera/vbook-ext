load('libs.js');

function execute(url) {
	var host = 'https://czbooks.net';
    var doc = Http.get(url).html();

    var author = $.Q(doc, '.novel-detail .author > a').text();
    var updateTime = $.QA(doc, '.novel-detail .state tr', {f: x => x.text().includes('更新時間'), m: x => x.text(), j: ' '});

    return Response.success({
        name: $.Q(doc, '.novel-detail .title').text().replace('《', '').replace('》', ''),
        cover: $.Q(doc, '.thumbnail img').attr('src'),
        author: author,
        description: $.Q(doc, '.novel-detail .description').html(),
        detail: '作者：' + author + '<br>' + updateTime,
        host: host
    })
}
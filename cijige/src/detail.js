load('libs.js');

function execute(url) {
    var host = 'https://www.cijige.com';

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var author = $.Q(doc, '#txtbook #author > a').text();

        return Response.success({
            name: $.Q(doc, '#txtbook .xiazai h1', { remove: 'span' }).text(),
            cover: $.Q(doc, '#txtbook img').attr('src'),
            author: author,
            description: $.Q(doc, '#txtbook #jj', { remove: 'h3' }).html(),
            detail: '作者：' + author + '<br>',
            host: host
        })
    }
    return null;
}
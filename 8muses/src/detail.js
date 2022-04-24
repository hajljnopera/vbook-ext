load('libs.js');

function execute(url) {
    var host = 'https://comics.8muses.com';

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        log($.Q(doc, '.gallery img').attr('data-src'));
        return Response.success({
            name: $.Q(doc, 'title').text().trim(),
            cover: $.Q(doc, '.gallery img').attr('data-src').mayBeFillHost(host),
            author: 'Unknown',
            description: '',
            detail: '',
            host: host
        })
    }
    return null;
}
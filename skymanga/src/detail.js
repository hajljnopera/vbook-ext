load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    if ($.Q(doc, '#cf-wrapper')) {
        log('Cloudflare!!!');
        doc = fetchDOM(url);
    }
    var author = $.Q(doc, '.author-content').text();

    return Response.success({
        name: $.Q(doc, '.post-title > h1', {remove: 'span'}).text().trim(),
        cover: $.Q(doc, '.summary_image img').attr('data-src') || '',
        author: author,
        description: $.Q(doc, '.description-summary', {remove: '.c-content-readmore'}).text() || 'Updating',
        detail: 'Author: ' + author,
        host: 'https://skymanga.co',
    });
}
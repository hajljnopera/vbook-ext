load('libs.js');

function execute(url) {
    var host = 'https://mangaowl.net';
    var doc = Http.get(url).html();

    var author;
    var authorItem = $.QA(doc, '.single_detail p.fexi_header_para', {f: x => x.text().includes('Author')});
    if (authorItem && authorItem.length) {
        author = $.Q(authorItem[0], '.author_link').text();
    }

    var ongoing = true;
    var statusItem = $.QA(doc, '.single_detail p.fexi_header_para', {f: x => x.text().includes('Status')});
    if (statusItem && statusItem.length) {
        ongoing = statusItem[0].text().includes('Ongoing');
    }

    return Response.success({
        name: $.Q(doc, '.single_detail h2').text().trim(),
        cover: $.Q(doc, '.single_detail img.lozad').attr('data-src'),
        author: author || 'Updating',
        description: $.Q(doc, '.single_detail .description').html(),
        detail: 'Author: ' + author,
        host: host,
        ongoing: ongoing
    });
}

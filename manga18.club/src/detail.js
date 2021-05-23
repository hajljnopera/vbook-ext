load('libs.js');

function execute(url) {
    var host = 'https://manga18.club';
    var doc = Http.get(url).html();

    var author;
    var authorItem = $.QA(doc, '.detail_listInfo > .item', {f: x => x.text().includes('Author')});
    if (authorItem && authorItem.length) {
        author = $.Q(authorItem[0], '.info_value').text();
    }

    return Response.success({
        name: $.Q(doc, '.detail_name > h1').text().trim(),
        cover: $.Q(doc, '.detail_avatar > img').attr('src'),
        author: author || 'Updating',
        description: $.Q(doc, '.detail_reviewContent').html(),
        detail: $.QA(doc, '.detail_listInfo > .item', {m: x => $.Q(x, '.info_label').text() + ': ' + $.Q(x, '.info_value').text(), j: '<br>'}),
        host: host,
        ongoing: $.Q(doc, '.detail_story span.label.label-success').text().includes('On Going')
    });
}

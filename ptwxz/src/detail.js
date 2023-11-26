load('libs.js');
load('config.js');


function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html('gb2312');
    let author = $.QA(doc, '#content table table td', {f: x => /作.*者：/.test(x.text()), m: x => x.text().replace(/作.*者：/, '').replace('<br', '').trim(), j: ' '});
    let category = $.QA(doc, '#content table table td', {f: x => /类.*别：/.test(x.text()), m: x => x.text().replace(/类.*别：/, '').replace('<br', '').trim(), j: ' '});
    let cover = $.Q(doc, '#content table table a > img[align][hspace][vspace]').attr('src');
    let description = $.Q(doc, '#content table table div[style]:not([id]):not([onclick])', {remove: 'span, a'}).html();
    description = cleanHtml(description);

    return Response.success({
        name: $.Q(doc, '#content h1').text(),
        cover: cover,
        author: author,
        description: description,
        detail: String.format('作者: {0}<br>类别: {1}', author, category),
        host: BASE_URL
    });
}
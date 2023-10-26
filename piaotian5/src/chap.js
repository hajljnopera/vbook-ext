load('libs.js');
load('config.js');

function execute(url) {
    url = url
        .replace('m.piaotian5.net', 'www.piaotian5.net')
        .replace('m.piaotian55.net', 'www.piaotian55.net')

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();

    let htm = $.Q(doc, '#content', { remove: 'script' }).html();

    htm = cleanHtml(htm)
        .split('(https://www.piaotian')[0]

    return Response.success(htm);
}
load('libs.js');

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var htm = $.Q(doc, '.content').html();
        htm = cleanHtml(htm);
        return Response.success(htm);
    }
    return null;
}
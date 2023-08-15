load('libs.js');

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        var htm = $.Q(doc, 'div.read-content.j_readContent').html();
        var author_say = doc.select('.author-say p').first().html();
        if (author_say) {
            htm = htm + "<br><br>PS:<br><br>" + author_say;
        }
        htm = htm.replace(/<br\s*\/?>|\n/g, "<br><br>");
        return Response.success(htm);
    }
    return null;
}
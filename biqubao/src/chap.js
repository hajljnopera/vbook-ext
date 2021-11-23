load('libs.js');

function execute(url) {
    url = url.replace('m.biqugee.com', 'www.biqugee.com');
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '#content').html();
    htm = cleanHtml(htm);
    return Response.success(htm);
}

function cleanHtml(html) {
  // trim br tags
  html = html.replace(/(^(<br>\s*)+|(<br>\s*)+$)/gm, '');
  // remove duplicate br tags
  html = html.replace(/(<br>\s*){2,}/gm, '<br>');
  // html decode
  html = html.replace(/&nbsp;/g, '');
  
  return html;
}
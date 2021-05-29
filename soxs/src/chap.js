load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();
    var htm = $.Q(doc, '.content', {remove: 'p'}).html();

    if (hasInvalidContent(htm)) return Response.success('FAIL!!!');

    htm = htm.replace(/^.*?soxs.*?<br>/, '');
    htm = cleanHtml(htm);

    // Ex: https://www.soxs.cc/ShiXiongXiaoShiMeiYouBaShanMenChaiLiao/110895.html
    htm = htm.replace(/^\s*第\d+章.*?<br>/, '');

    // log(htm);
    return Response.success(htm);
}


function hasInvalidContent(s) {
    return s.includes('章节内容获取失败') && s.includes('如果你刷新多次还无法显示内容，请通过意见反馈通知我们，我们会在第一时间修复！');
}
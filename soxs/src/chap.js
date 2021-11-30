load('libs.js');

function execute(url) {
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();

		var htm = $.Q(doc, '.content', {remove: 'p'}).html();

		if (hasInvalidContent(htm)) return Response.success('FAIL!!!');

		htm = cleanHtml(htm);

		// Ex: https://www.soxs.cc/ShiXiongXiaoShiMeiYouBaShanMenChaiLiao/110895.html
		htm = htm.replace(/^\s*第\d+章.*?<br>/, '');

        htm = htm.replace(/^.*?soxs.*?<br>/gm, '');

		// log(htm);
		return Response.success(htm);
    }
    return null;
}

function hasInvalidContent(s) {
    return s.includes('章节内容获取失败') && s.includes('如果你刷新多次还无法显示内容，请通过意见反馈通知我们，我们会在第一时间修复！');
}
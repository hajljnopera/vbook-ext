load('libs.js');

function execute(url) {
    url = url.replace('m.liquge.com', 'www.liquge.com');
    var doc = Http.get(url).html();

    var htm = $.Q(doc, '#acontent', {remove: 'a.linkcontent'}).html();
    htm = htm
    	.replace(/笔趣阁.*最快更新.*最新章节！/, '')
    	.replace(/^(<br>| | )+/, '');
    	;

    return Response.success(htm);
}
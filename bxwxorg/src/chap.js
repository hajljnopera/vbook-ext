load('libs.js');

function execute(url) {
    url = url.replace('m.bxwxorg.com', 'www.bxwxorg.com');
    url = url.replace('m.bxwx66.com', 'www.bxwx66.com');
    
    var doc = Http.get(url).html();

    var htm = $.QA(doc, '#content > p', {f: x => !shouldIgnoreTag(x), m: x => x.text(), j: '<br>'});

    htm = htm
        .replace(/\&nbsp;/g, '')
        ;

    return Response.success(htm);
}

function shouldIgnoreTag(tag) {
    var s = tag.text();
    return s.includes('bxwx')
        || (s.includes('为了方便下次阅读') && s.includes('下次打开书架即可看到！'));
}
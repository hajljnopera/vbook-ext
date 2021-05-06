load('libs.js');

function execute(url) {

    // https://m.shouda88.com/117454/460876.html --> https://www.shouda88.com/117454/460876.html
    url = url.replace('m.shouda88.com', 'www.shouda88.com');
    var doc = Http.get(url).html();

    var htm = $.QA(doc, '#content > p', {f: x => !shouldIgnoreTag(x), j: ' '});

    return Response.success(htm);
}

function shouldIgnoreTag(tag) {
    var s = tag.text();
    return s.includes('shouda8') 
        || s.includes('无错章节将持续在手打吧小说网更新,站内无任何广告,还请大家收藏和推荐手打吧！');
}
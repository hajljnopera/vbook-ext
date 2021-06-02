load('libs.js');

function execute(url) {
    // https://m.shouda88.com/117454/460876.html --> https://www.shouda88.com/117454/460876.html
    url = url.replace('m.shouda88.com', 'www.shouda88.com');
    var doc = Http.get(url).html();

    var pArr = $.QA(doc, '#content > p', {f: x => !shouldIgnoreTag(x)});

    // Ex: https://www.shouda88.com/185334/491527.html
    if (pArr[0] && /第.+章/.test(pArr[0])) {
        pArr.shift();
    }

    var htm = pArr.join();

    return Response.success(htm);
}

function shouldIgnoreTag(tag) {
    var s = tag.text();
    return s.includes('shouda8') 
        || s.includes('无错章节将持续在手打吧小说网更新,站内无任何广告,还请大家收藏和推荐手打吧！');
}
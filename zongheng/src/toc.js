load('libs.js');

function execute(url) {
    url = redirect(url);
    var data = [];

    if (!TypeChecker.isArray(url)) {
        data = parseDoc(url);
    }
    else {
        data = parseDoc(url[0]);

        if (!data.length) {
            data = parseDoc(url[1]);
        }
    }

    if (data.length) return Response.success(data);

    return Response.error(url);
}

function redirect(url) {
    // http://book.zongheng.com/book/672340.html --> http://book.zongheng.com/showchapter/672340.html
    var r1 = /https?:\/\/(book|huayu)\.zongheng\.com\/book\/(\d+)\.html$/g;
    if (url.match(r1)) return url.replace(r1, 'http://$1.zongheng.com/showchapter/$2.html');

    // https://m.zongheng.com/h5/book?bookid=632434&h5=1&fpage=33&fmodule=308&_st=33_308-1_632434 
    // --> http://book.zongheng.com/showchapter/632434.html
    // https://m.zongheng.com/h5/book?bookid=1077664&h5=1&fpage=33&fmodule=310&_st=33_310-2_1077664
    // --> http://huayu.zongheng.com/book/1077664.html
    var r2 = /https?:\/\/m\.zongheng\.com\/h.+\/book\?bookid=(\d+)/, m;
    if ((m = url.match(r2)) && m[1]) {
        return [
            String.format('http://book.zongheng.com/showchapter/{0}.html', m[1]),
            String.format('http://huayu.zongheng.com/showchapter/{0}.html', m[1])
        ]
    }

    return url;
}

function parseDoc(url) {
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, 'div.volume-list > div > ul > li');
    elems.forEach(function(e) {
        var vip = hasClass(e, 'vip') ? '[VIP] ' : '';
        data.push({
            name: vip + $.Q(e, 'a').text(),
            url: $.Q(e, 'a').attr('href'),
        })
    });

    return data;
}

function hasClass(element, str) {
    var className = element.attr('class');
    var classList = className.split(/(\s+)/).filter(s => s.trim().length > 0);

    return classList.includes(str);
}


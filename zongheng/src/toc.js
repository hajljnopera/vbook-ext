load('libs.js');

function execute(url) {
    url = redirect(url);
    log(url);
    var doc = Http.get(url.length ? url[0] : url).html();
    var data = [];

    var elems = $.QA(doc, 'div.volume-list > div> ul > li > a');
    if (!elems.length && url[1]) {
        doc = Http.get(url[1]).html();
        elems = $.QA(doc, 'div.volume-list > div> ul > li > a');
    };

    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
        })
    });

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
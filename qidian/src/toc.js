load('libs.js');

function execute(url) {
    var host = 'https://book.qidian.com';
    url = url.replace(/m\.qidian\.com\/book\/(\d+)/, 'book.qidian.com/info/$1');

    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        var data = [];

        parseDoc(doc, data);
        if (data.length) return Response.success(data);

        // API
        var bookId = url.match(/qidian\.com\/(info|book)\/(\d+)/)[2];
        var cookies = response.header("Set-Cookie");

        var _csrfToken = cookies.match(/_csrfToken=(.*?);/)[1];

        var ajaxUrl = 'https://book.qidian.com/ajax/book/category?_csrfToken={0}&bookId={1}';
        var json = Http.get(String.format(ajaxUrl, _csrfToken, bookId)).string();

        var j = JSON.parse(json);

        if (j.code == 1) return Response.error(url);

        var freeFm = 'https://read.qidian.com/chapter/{0}/{1}';
        var vipFm = 'https://vipreader.qidian.com/chapter/{0}/{1}';
        
        j.data.vs.forEach(function(section){
            var chapters = section.cs;
            chapters.forEach(function(chap){
                data.push({
                    name: (section.hS ? '[VIP] ' : '') + chap.cN,
                    url: String.format(section.hS ? vipFm : freeFm, bookId, chap.id),
                    host: 'https://www.qidian.com'
                })
            })
        })

        if (data.length) return Response.success(data);
        return Response.error(url);
    }
    return null;
}

function parseDoc(doc, arr) {
    var elems = $.QA(doc, '#j-catalogWrap > div.volume-wrap > div > ul > li');
    if (!elems.length) return;

    var host = 'https://book.qidian.com';

    elems.forEach(function(e) {
        var url = $.Q(e, 'a').attr('href').mayBeFillHost(host);
        var vip = url.includes('vipreader') ? '[VIP] ' : '';

        arr.push({
            name: vip + $.Q(e, 'a').text(),
            url: url,
            host: host
        })
    })
}
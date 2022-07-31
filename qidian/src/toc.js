load('libs.js');

function execute(url) {
    let host = 'https://book.qidian.com';
    url = 'https://book.qidian.com/info/' + url.match(/\d+/)[0];
    // log(url);

    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        let data = [];

        parseDoc(doc, data);
        log(data.length);
        if (data.length) return Response.success(data);

        // API
        let bookId = url.match(/qidian\.com\/(info|book)\/(\d+)/)[2];
        let cookies = response.header("Set-Cookie");

        let _csrfToken = cookies.match(/_csrfToken=(.*?);/)[1];

        let ajaxUrl = 'https://book.qidian.com/ajax/book/category?_csrfToken={0}&bookId={1}';
        let json = Http.get(String.format(ajaxUrl, _csrfToken, bookId)).string();

        let j = JSON.parse(json);

        if (j.code == 1) return Response.error(url);

        let freeFm = 'https://read.qidian.com/chapter/{0}/{1}';
        let vipFm = 'https://vipreader.qidian.com/chapter/{0}/{1}';
        
        j.data.vs.forEach(function(section){
            let chapters = section.cs;
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
    let elems = $.QA(doc, '#j-catalogWrap > div.volume-wrap > div > ul > li');
    if (!elems.length) return;

    let host = 'https://book.qidian.com';

    elems.forEach(function(e) {
        let url = $.Q(e, 'a').attr('href').mayBeFillHost(host);
        let vip = url.includes('vipreader') ? '[VIP] ' : '';

        arr.push({
            name: vip + $.Q(e, 'a').text(),
            url: url,
            host: host
        })
    })
}
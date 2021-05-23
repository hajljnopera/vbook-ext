load('libs.js');

function execute(url, page) {
    var host = 'https://www.17k.com';
    var baseUrl = 'https://www.17k.com/all/book/{0}_0_0_0_0_0_1_{1}.html';
    var newUrl = String.format(baseUrl, url, page || 1);
    // log(newUrl);
    var doc = Http.get(newUrl).html();
    var data = [];
    
    var elems = $.QA(doc, '.search-list .alltextlist');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.alltextmiddle > dl > dt > a').text(),
            link: $.Q(e, '.alltextleft > a').attr('href').mayBeFillHost(host),
            cover: $.Q(e, '.alltextleft img').attr('src'),
            description: $.Q(e, '.ls > a').text(),
            host: host
        })
    })

    // log(data.length);

    var next = $.QA(doc, '.page a.on > span', {m: x => x.text()}).filter(s => s.match(/\d+/));
    if (next && next[0]) return Response.success(data, incText(next[0]));

    return Response.success(data);
}

function incText(s, n) {
    n = n || 1;
    var i = parseInt(s, 10);
    return (i + n).toString();
}

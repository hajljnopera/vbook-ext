load('libs.js');

function execute(url, page) {
    var host = 'http://www.mytxt.cc';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '[id^=alistbox]');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.title > h2 > a').text().getMatch(/《(.+)》/, 1, s => s),
            link: $.Q(e, 'div.title > h2 > a').attr('href').append('/'),
            cover: $.Q(e, 'div.pic img').attr('src'),
            description: $.Q(e, 'div.sys > li > a').text(),
            host: host
        })
    })

    var next = $.Q(doc, '#pagelink > strong + a').text();

    return Response.success(data, next)
}


String.prototype.getMatch = function(pattern, index, callback) {
    var s = this;
    var m = s.match(pattern);
    if (m && m[index]) return m[index];
    return callback ? callback(s) : '';
}
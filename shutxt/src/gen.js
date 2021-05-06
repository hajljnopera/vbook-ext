load('libs.js');

function execute(url, page) {
    var host = 'https://www.shutxt.com';
    page = page || '1';
    var doc = Http.get(String.format(host + url + (page == '1' ? 'index.html' : 'index_{0}.html'), page)).html();
    var data = [];

    var elems = $.QA(doc, '.bbox');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.bintro > h3 > a').text(),
            link: $.Q(e, '.bintro > h3 > a').attr('href'),
            cover: $.Q(e, '.bpic > img').attr('src'),
            description: $.Q(e, '.bintro > h3 > span').text(),
            host: host
        })
    })

    var next = $.Q(doc, '.pages > b + a').text();

    return Response.success(data, next);
}
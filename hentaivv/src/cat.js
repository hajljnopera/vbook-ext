load('libs.js');

function execute(url, page) {
    var host = 'https://hentaivv.com';
    page = page || '1';

    var res = Http.post("https://hentaivv.com/wp-admin/admin-ajax.php").params({
        'action': 'load_more_tax',
        'keyword_check': '',
        'current_page_tax': page,
        'max_page_tax': 9,
        'option_keyword_tax': 'new-chap',
        'term[taxonomy]': 'keyword',
        'term[slug]': url,
        // 'term[name]': ''
    }).html();

    var doc = Html.parse(res);
    var data = [];

    var elems = $.QA(doc, 'li');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'a').attr('title'),
            link: $.Q(e, 'a').attr('href'),
            cover: $.Q(e, 'a > img').attr('src') || '',
            description: $.Q(e, 'div.content').text(),
            host: host
        })
    })

    var next = parseInt(page, 10) + 1;

    return Response.success(data, next.toString());
}


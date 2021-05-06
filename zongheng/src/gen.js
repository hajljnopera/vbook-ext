load('libs.js');

function execute(url, page) {
    url = String.format(url, page || 1);

    var doc = Http.get(url).html();
    var data = [];
    
    var elems = $.QA(doc, '.rank_d_list');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.rank_d_b_name').attr('title'),
            link: $.Q(e, '.rank_d_book_img.fl > a').attr('href'),
            cover: $.Q(e, '.rank_d_book_img.fl > a > img').attr('src'),
            description: $.Q(e, '.rank_d_b_last').attr('title'),
            host: ''
        })
    })

    var next = $.Q(doc, 'a.active.scrollpage + a').text();
    
    return Response.success(data, next)
}
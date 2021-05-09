load('libs.js');

function execute(url) {
    url = url.replace(/.+\.69shu\.com\/txt\/(\d+)\.htm/, 'https://www.69shu.com/$1').append('/');
    var doc = Http.get(url).html('gbk');

    var data = [];

    var elems = $.QA(doc, 'div.catalog > ul > li > a');
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: 'https://www.69shu.com'
        })
    });

    return Response.success(data);
}
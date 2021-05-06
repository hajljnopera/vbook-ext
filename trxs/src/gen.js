load('libs.js');

function execute(url, page) {
    var host = 'http://trxs.cc';

    var newUrl = '';
    page = page || '1';
    var params = url.split('♥');

    var fm = host + '/' + (page.toString() == '1' ? params[0] : params[1]);
    if (params.length == 3) {
      var _eval = String.format(params[2], page);
      newUrl = String.format(fm, eval(_eval));
    }
    else {
      newUrl = String.format(fm, page);
    }

    var doc = Http.get(newUrl).html('gb2312');
    var data = [];

    var elems = $.QA(doc, 'div.bk > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.infos > h3').text(),
            link: e.attr('href'),
            cover: $.Q(e, 'div.pic > img').attr('src'),
            description: '',
            host: host
        })
    })

    var next = $.Q(doc, 'div.page > b').text();
    if (next) next = parseInt(next, 10) + 1;

    return Response.success(data, next.toString())
}
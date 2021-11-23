load('libs.js');

function execute(url) {
	var host = 'https://www.biqugee.com';
    url = url.replace('m.biqugee.com', 'www.biqugee.com').append('/');
    var doc = Http.get(url).html();
    
    var data = [];
    var elems = $.QA(doc, '#list a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e){
        data.push({
            name: $.Q(e, 'a').text(),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}

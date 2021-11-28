load('libs.js');

function execute(url) {
    var host = 'https://www.shubaow.net';
    url = url.replace(/m\.shubaow\.net\/(\d+)\/(\d+)\/?/g, 'www.shubaow.net/$1_$2/').append('/');

    var response = fetch(url);
    if (response.ok) {
        var doc = response.html('gbk');

        var data = [];
        var elems = $.QA(doc, '#list a');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, 'a').text(),
                url: e.attr('href'),
                host: host
            })
        });

        if (data.length >= 18) {
            data.splice(0, 9); // Remove first 9 items
        } else {
            data.splice(0, data.length / 2);
        }

        return Response.success(data);
    }
    return null;
}
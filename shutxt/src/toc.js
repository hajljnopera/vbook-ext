load('libs.js');

function execute(url) {
    var host = 'https://www.shutxt.com';
    url = url.replace('m.shutxt.com', 'www.shutxt.com');
    var doc = Http.get(url).html();
    
    var data = [];
    var cols = $.QA(doc, '#yuedu > table ul');
    if (!cols.length) return Response.error(url);

    cols = cols.map(col => {
        var rows = $.QA(col, 'li > a');
        return rows.map(row => {
            var o = {
                name: row.text(),
                url: row.attr('href'),
                host: host
            };
            return o;
        });
    });

    for(var i = 0; i < cols[0].length; i++) {
        for(var j = 0; j < cols.length; j++) {
            if (cols[j][i]) data.push(cols[j][i]);
        }
    }
    // log(data);

    return Response.success(data);
}
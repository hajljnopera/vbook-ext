load('libs.js');
load('config.js');

function execute(url) {
    url = url
        .replace('m.piaotian5.net', 'www.piaotian5.net')
        .replace('m.piaotian55.net', 'www.piaotian55.net')

    var response = fetch(url);
    if (!response.ok) return null;

    var doc = response.html();

    var data = [];
    var elems = $.QA(doc, '.listmain dd > a');

    if (!elems.length) return Response.error(url);

    log(elems.length);
    log(elems);


    if (elems.length >= 12) {
        elems.splice(0, 12); // Remove first 12 最新章节
    } else {
        elems.splice(0, elems.length / 2);
    }

    elems.forEach(function(e){
        data.push({
            name: $.Q(e, 'a').text(),
            url: e.attr('href'),
            host: BASE_URL
        })
    });

    return Response.success(data);
}
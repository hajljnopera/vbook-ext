load('libs.js');
load('config.js');

function execute(url) {
    // https://www.ptwxz.com/bookinfo/12/12450.html
    // --> https://www.ptwxz.com/html/12/12450/

    url = BASE_URL + '/html/' + url.split('/bookinfo/')[1].split('.html')[0] + '/';
    // log(url);

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html('gb2312');

    let data = [];
    let elems = $.QA(doc, 'div.centent li > a');

    if (!elems.length) return Response.error(url);

    elems.forEach(function(e){
        data.push({
            name: e.text(),
            url: e.attr('href').mayBeFillHost(url),
            host: BASE_URL,
        })
    });

    return Response.success(data);
}
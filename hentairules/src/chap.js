load('libs.js');

function execute(url) {
    var host = 'https://www.hentairules.net';
    var doc = Http.get(url).html();
    var imgs = [];

    var linkStart = $.Q(doc, 'link[rel="start"]').attr('href');
    var pages = $.QA(doc, '.navigationBar > a', {m: x => host + linkStart + x.attr('href')});
    pages.unshift(url);
    // log(pages);

    pages.forEach(function(page) {
        parsePage(page, imgs);
    })

    // log(imgs);
    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}

function parsePage(url, arr) {
    var host = 'https://www.hentairules.net';
    var doc = Http.get(url).html();

    var elems = $.QA(doc, '#thumbnails img.thumbnail');
    if (!elems.length) return;

    var linkStart = $.Q(doc, 'link[rel="start"]').attr('href');
    
    elems.forEach(function(e) {
        arr.push(host + linkStart + e.attr('src').replace('_data/i/', '').replace(/-(sq|th).jpg/, '.jpg'));
    })
}
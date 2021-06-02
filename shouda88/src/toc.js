load('libs.js');

function execute(url) {
    var host = 'https://www.shouda88.com';
    // https://m.shouda88.com/shu_117454.html --> https://www.shouda88.com/117454/
    url = url.replace(/m\.shouda88\.com\/shu_(\d+)\.html/, 'www.shouda88.com/$1/');
    url = url.replace('m.shouda88.com', 'www.shouda88.com');
    var doc = Http.get(url).html();

    var data = [];
    var elems = $.QA(doc, 'div.link_14 dd > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: cleanName(e.text()),
            url: e.attr('href'),
            host: host
        })
    });

    return Response.success(data);
}

// Ex: https://www.shouda88.com/73063
// "第449章 449：鸿钧感悟与小龙女不一样的爱 牡丹仙子的柔情" ---> "第449章 鸿钧感悟与小龙女不一样的爱 牡丹仙子的柔情"
function cleanName(name) {
    var re = /第(\d+)章\s*(\d+)\s*：?(.+)$/, m;
    if ((m = name.match(re)) && m[0] && m[1] && m[2] && (m[1] == m[2])) {
        // return name.replace(re, '第$1章 $3');
        return String.format('第{0}章 {1}', m[1], m[3]);
    }

    return name;
}
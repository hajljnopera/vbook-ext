load('libs.js');
load('config.js');

function execute(url, page) {
    url = String.format(BASE_URL + "/newtag" + url);
    console.log(url)
    // log(url);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        var data = [];
        var elems = doc.select("ul#article_list_content li")
        elems.forEach(function(e) {
            data.push({
                name: e.select("h3").text().trim(),
                link: e.select("h3 a").attr('href'),
                cover: e.select("img").attr('data-src').trim(),
                description: $.Q(e, '.zxzj > p').text().replace('最近章节', ''),
                host: BASE_URL
            })
        })
        return Response.success(data);
    }
    return null;
}
load('libs.js');

function execute(url, page) {
    var host = 'https://www.17k.com';

    var appKey = 2406394919; // https://static.17k.com/js/main.js?v=042021

    page = page || '1';
    url = url.replace('${appKey}', appKey).replace('${key}', '2&orderTime=1').replace('${page}', page);

    var json = Http.get(url).string();
    var j = JSON.parse(json);

    if (j.status.code != 0) return Response.error('Retry');

    var data = [];
    j.data.forEach(function(item){
        data.push({
            name: item.bookName,
            link: String.format('https://www.17k.com/book/{0}.html', item.id),
            cover: item.coverImg,
            description: item.authorPenName,
            host: host
        })
    })

    page = parseInt(page, 10);
    if (page < 5) return Response.success(data, (page+1).toString());

    return Response.success(data);
}
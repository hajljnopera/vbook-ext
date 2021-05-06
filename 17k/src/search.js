load('libs.js');

function execute(key, page) {
    var host = 'https://www.17k.com';

    var appKey = 2406394919; // https://static.17k.com/js/main.js?v=042021

    page = page || '1';
    var url = 'http://api.ali.17k.com/v2/book/search?sort_type=0&app_key=${appKey}&_access_version=2&cps=0&channel=2&_versions=1070&merchant=17KH5&page=1&client_type=1&_filter_data=1&class=0&key=${key}&page=${page}';
    url = url.replace('${appKey}', appKey).replace('${key}', key).replace('${page}', page);

    var json = Http.get(url).string();
    var j = JSON.parse(json);

    if (j.status.code != 0) return Response.error('Retry');

    var data = [];
    j.data.forEach(function(item){
        if (!item.id) return;
        data.push({
            name: item.book_name,
            link: String.format('https://www.17k.com/book/{0}.html', item.id),
            cover: item.cover,
            description: item.author_name,
            host: host
        })
    })

    var currentPage = j.cur_page;
    var totalPage = j.total_page;

    if (currentPage <= totalPage) return Response.success(data, (currentPage+1).toString());

    return Response.success(data);
}
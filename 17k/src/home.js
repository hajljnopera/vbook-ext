function execute() {
    // https://github.com/LM-Firefly/booksource/blob/master/sources/17k.com.json
    return Response.success([
        {title: "畅销榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=2&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "礼物榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=15&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "红包榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=3&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "新书榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=9&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "人气榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=10&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "完本榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=11&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "热评榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=5&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
        {title: "更新榜", input: "http://api.17k.com/book/rank/client?classId=${key}&orderBy=1&page=${page}&type=6&clientType=1&cpsOpid=0&_filterData=1&channel=0&_versions=1070&merchant=17Kyyb&appKey=${appKey}&cpsSource=0&platform=2", script: "gen.js"},
    ]);
}
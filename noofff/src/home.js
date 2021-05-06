function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "rank.js"},
        {title: "玄幻小说", input: "/xuanhuanxiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "修真小说", input: "/xiuzhenxiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "都市小说", input: "/dushixiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "穿越小说", input: "/chuanyuexiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "网游小说", input: "/wangyouxiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "科幻小说", input: "/kehuanxiaoshuotuijian/{0}/", script: "gen.js"},
        {title: "其他小说", input: "/qitaxiaoshuotuijian/{0}/", script: "gen.js"},
    ]);
}
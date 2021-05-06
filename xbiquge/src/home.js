function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "玄幻小说", input: "/xuanhuanxiaoshuo/", script: "gen.js"},
        {title: "修真小说", input: "/xiuzhenxiaoshuo/", script: "gen.js"},
        {title: "都市小说", input: "/dushixiaoshuo/", script: "gen.js"},
        {title: "穿越小说", input: "/chuanyuexiaoshuo/", script: "gen.js"},
        {title: "网游小说", input: "/wangyouxiaoshuo/", script: "gen.js"},
        {title: "科幻小说", input: "/kehuanxiaoshuo/", script: "gen.js"},
        {title: "完本小说", input: "/wanben/", script: "gen.js"}
    ])
}
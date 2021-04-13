function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "玄幻言情", input: '/xuanhuanxiaoshuo/', script: "gen.js"},
        {title: "仙侠言情", input: '/xiuzhenxiaoshuo/', script: "gen.js"},
        {title: "现代情感", input: '/dushixiaoshuo/', script: "gen.js"},
        {title: "古装迷情", input: '/chuanyuexiaoshuo/', script: "gen.js"},
        {title: "网游科幻", input: '/wangyouxiaoshuo/', script: "gen.js"},
        {title: "穿越重生", input: '/chongsheng/', script: "gen.js"},
        {title: "其他言情", input: '/yanqing/', script: "gen.js"},
        {title: "耽美同人", input: '/danmei/', script: "gen.js"},
    ]);
}
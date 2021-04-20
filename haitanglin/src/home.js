function execute() {
    return Response.success([
        {title: "总点击榜", input: "/top/allvisit/{0}.html", script: "rank.js"},
        {title: "月点击榜", input: "/top/monthvisit/{0}.html", script: "rank.js"},
        {title: "周点击榜", input: "/top/weekvisit/{0}.html", script: "rank.js"},
        {title: "总推荐榜", input: "/top/allvote/{0}.html", script: "rank.js"},
        {title: "总收藏榜", input: "/top/goodnum/{0}.html", script: "rank.js"},
        {title: "最近更新", input: "/top/lastupdate/{0}.html", script: "rank.js"},

        {title: "玄幻奇幻", input: "/sort/1/{0}.html", script: "gen.js"},
        {title: "武侠仙侠", input: "/sort/2/{0}.html", script: "gen.js"},
        {title: "都市生活", input: "/sort/3/{0}.html", script: "gen.js"},
        {title: "历史军事", input: "/sort/4/{0}.html", script: "gen.js"},
        {title: "游戏竞技", input: "/sort/5/{0}.html", script: "gen.js"},
        {title: "科幻未来", input: "/sort/6/{0}.html", script: "gen.js"},
        {title: "恐怖悬疑", input: "/sort/7/{0}.html", script: "gen.js"},
        {title: "综合其他", input: "/sort/18/{0}.html", script: "gen.js"},
    ]);
}
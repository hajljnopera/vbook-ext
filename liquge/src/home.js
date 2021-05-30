function execute() {
    return Response.success([
        {title: "玄幻魔法", input: "/all/1/{0}.html", script: "gen.js"},
        {title: "武侠仙侠", input: "/all/2/{0}.html", script: "gen.js"},
        {title: "都市现代", input: "/all/3/{0}.html", script: "gen.js"},
        {title: "历史军事", input: "/all/4/{0}.html", script: "gen.js"},
        {title: "网游竞技", input: "/all/5/{0}.html", script: "gen.js"},
        {title: "科幻惊悚", input: "/all/6/{0}.html", script: "gen.js"},
        {title: "女生频道", input: "/all/7/{0}.html", script: "gen.js"},
        {title: "综合其他", input: "/all/8/{0}.html", script: "gen.js"},
    ]);
}
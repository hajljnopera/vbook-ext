function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "玄幻小说", input: "/xuanhuan/1_{0}.html", script: "gen.js"},
        {title: "修真小说", input: "/xiuzhen/2_{0}.html", script: "gen.js"},
        {title: "都市小说", input: "/dushi/3_{0}.html", script: "gen.js"},
        {title: "精品小说", input: "/jingpin/5_{0}.html", script: "gen.js"},
        {title: "科幻小说", input: "/kehuan/6_{0}.html", script: "gen.js"},
    ]);
}
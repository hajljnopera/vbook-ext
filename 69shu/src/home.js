function execute() {
    return Response.success([
        {title: "最新更新", input: "/last", script: "update.js"},
        {title: "全部分类", input: "/ajax_novels/full/0/{0}.htm", script: "gen.js"},
        {title: "言情小说", input: "/ajax_novels/full/3/{0}.htm", script: "gen.js"},
        {title: "玄幻魔法", input: "/ajax_novels/full/1/{0}.htm", script: "gen.js"},
        {title: "修真武侠", input: "/ajax_novels/full/2/{0}.htm", script: "gen.js"},
        {title: "穿越时空", input: "/ajax_novels/full/11/{0}.htm", script: "gen.js"},
        {title: "都市小说", input: "/ajax_novels/full/9/{0}.htm", script: "gen.js"},
        {title: "历史军事", input: "/ajax_novels/full/4/{0}.htm", script: "gen.js"},
        {title: "游戏竞技", input: "/ajax_novels/full/5/{0}.htm", script: "gen.js"},
        {title: "科幻空间", input: "/ajax_novels/full/6/{0}.htm", script: "gen.js"},
        {title: "悬疑惊悚", input: "/ajax_novels/full/7/{0}.htm", script: "gen.js"},
        {title: "同人小说", input: "/ajax_novels/full/8/{0}.htm", script: "gen.js"},
        {title: "官场职场", input: "/ajax_novels/full/10/{0}.htm", script: "gen.js"},
        {title: "青春校园", input: "/ajax_novels/full/12/{0}.htm", script: "gen.js"},
    ]);
}
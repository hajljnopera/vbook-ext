function execute() {
    return Response.success([
        {title: "更新", input: "lastupdate", script: "gen.js"},
        {title: "推荐", input: "allvote", script: "gen.js"},
        {title: "点击", input: "allvisit", script: "gen.js"},
        {title: "收藏", input: "goodnum", script: "gen.js"},
        {title: "新书入库", input: "postdate", script: "gen.js"},
        {title: "完本", input: "quanben", script: "gen.js"},
    ]);
}
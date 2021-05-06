function execute() {
    return Response.success([
        {title: "玄幻魔法", input: "/mulu/1-{0}.html", script: "gen.js"},
        {title: "武侠修真", input: "/mulu/2-{0}.html", script: "gen.js"},
        {title: "都市言情", input: "/mulu/3-{0}.html", script: "gen.js"},
        {title: "历史军事", input: "/mulu/4-{0}.html", script: "gen.js"},
        {title: "推理", input: "/mulu/5-{0}.html", script: "gen.js"},
        {title: "网游动漫", input: "/mulu/6-{0}.html", script: "gen.js"},
        {title: "科幻", input: "/mulu/7-{0}.html", script: "gen.js"},
        {title: "恐怖灵异", input: "/mulu/8-{0}.html", script: "gen.js"},
        {title: "穿越重生", input: "/mulu/9-{0}.html", script: "gen.js"},
        {title: "同人", input: "/mulu/10-{0}.html", script: "gen.js"},
    ]);
}
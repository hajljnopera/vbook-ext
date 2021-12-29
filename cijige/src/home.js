function execute() {
    return Response.success([
        {title: "最新", input: "/top/13-0-{0}.html", script: "genTop.js"},
        {title: "热门", input: "/top/3-0-{0}.html", script: "genTop.js"},
        {title: "玄幻", input: "/fenlei/1-{0}.html", script: "genFenlei.js"},
        {title: "武侠", input: "/fenlei/2-{0}.html", script: "genFenlei.js"},
        {title: "言情", input: "/fenlei/3-{0}.html", script: "genFenlei.js"},
        {title: "都市", input: "/fenlei/4-{0}.html", script: "genFenlei.js"},
        {title: "穿越", input: "/fenlei/5-{0}.html", script: "genFenlei.js"},
        {title: "历史", input: "/fenlei/6-{0}.html", script: "genFenlei.js"},
        {title: "耽美", input: "/fenlei/7-{0}.html", script: "genFenlei.js"},
        {title: "科幻", input: "/fenlei/8-{0}.html", script: "genFenlei.js"},
        {title: "恐怖", input: "/fenlei/9-{0}.html", script: "genFenlei.js"},
        {title: "游戏", input: "/fenlei/10-{0}.html", script: "genFenlei.js"},
        {title: "文学", input: "/fenlei/11-{0}.html", script: "genFenlei.js"},
        {title: "激情", input: "/fenlei/12-{0}.html", script: "genFenlei.js"},
        {title: "短篇", input: "/fenlei/13-{0}.html", script: "genFenlei.js"},
    ]);
}
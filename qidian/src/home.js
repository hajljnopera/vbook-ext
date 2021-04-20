function execute() {
    return Response.success([
        {title: "起点月票榜", input: "/rank/yuepiao?page={0}", script: "gen.js"},
        {title: "24小时热销榜", input: "/rank/hotsales?page={0}", script: "gen.js"},
        {title: "阅读指数榜", input: "/rank/readIndex?page={0}", script: "gen.js"},
        {title: "推荐票榜", input: "/rank/recom?page={0}", script: "gen.js"},
        {title: "收藏榜", input: "/rank/collect?page={0}", script: "gen.js"},
        {title: "签约作者新书榜", input: "/rank/signnewbook?page={0}", script: "gen.js"},
        {title: "公众作家新书榜", input: "/rank/pubnewbook?page={0}", script: "gen.js"},
        {title: "原创风云榜·新书", input: "/rank/fengyun?page={0}", script: "gen.js"},
        {title: "新人榜", input: "/rank/newauthor?page={0}", script: "gen.js"},

        {title: "女生网", input: "/mm/rank/yuepiao?style=1&page={0}", script: "gen.js"},
        
        // {title: "", input: "", script: "gen.js"},
    ]);
}
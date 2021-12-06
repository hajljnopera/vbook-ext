function execute() {
    return Response.success([

        // 热门作品排行
        {title: "起点月票榜", input: "/rank/yuepiao/year{year}-month{month}-page{page}/", script: "gen.js"},
        {title: "24小时热销榜", input: "/rank/hotsales/page{page}/", script: "gen.js"},
        {title: "阅读指数榜", input: "/rank/readindex/page{page}/", script: "gen.js"},
        {title: "推荐票榜", input: "/rank/recom/page{page}/", script: "gen.js"},
        {title: "收藏榜", input: "/rank/collect/page{page}/", script: "gen.js"},
        {title: "更新榜", input: "/rank/vipup/page{page}/", script: "gen.js"},
        {title: "VIP收藏榜", input: "/rank/vipcollect/page{page}/", script: "gen.js"},
        {title: "打赏榜", input: "/rank/vipreward/chn-{lastMonth}-page{page}/", script: "gen.js"},
        
        // 新书排行
        {title: "签约作者新书榜", input: "/rank/signnewbook/page{page}/", script: "gen.js"},
        {title: "公众作者新书榜", input: "/rank/pubnewbook/page{page}/", script: "gen.js"},
        {title: "新人签约新书榜", input: "/rank/newsign/page{page}/", script: "gen.js"},
        {title: "新人作者新书榜", input: "/rank/newauthor/page{page}/", script: "gen.js"},

        // 其他排行
        {title: "女生网", input: "/mm/rank/yuepiao/page{page}/", script: "gen.js"},
    ]);
}
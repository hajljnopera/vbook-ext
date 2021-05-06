function execute() {
    return Response.success([
        {title: "玄幻", input: 'xuanhuan', script: "gen.js"},
        {title: "武侠", input: 'wuxia', script: "gen.js"},
        {title: "都市", input: 'dushi', script: "gen.js"},
        {title: "历史", input: 'lishi', script: "gen.js"},
        {title: "游戏", input: 'youxi', script: "gen.js"},
        {title: "科幻", input: 'kehuan', script: "gen.js"},
        {title: "恐怖", input: 'xuanyi', script: "gen.js"},
        {title: "二次", input: 'erciyuan', script: "gen.js"},
        {title: "经典", input: 'jingdian', script: "gen.js"},
    ]);
}
function execute() {
    return Response.success([
        {title: "月票榜", input: "http://www.zongheng.com/rank/details.html?rt=1&d=1&p={0}", script: "gen.js"},
        {title: "24小时畅销榜", input: "http://www.zongheng.com/rank/details.html?rt=3&d=1&p={0}", script: "gen.js"},
        {title: "新书榜", input: "http://www.zongheng.com//rank/details.html?rt=4&d=1&p={0}", script: "gen.js"},
        {title: "新书订阅榜", input: "http://www.zongheng.com/rank/details.html?rt=9&d=1&p={0}", script: "gen.js"},
        {title: "点击榜", input: "http://www.zongheng.com/rank/details.html?rt=5&d=1&p={0}", script: "gen.js"},
        {title: "推荐榜", input: "http://www.zongheng.com/rank/details.html?rt=6&d=1&p={0}", script: "gen.js"},
        // {title: "", input: "", script: "gen.js"},
    ]);
}
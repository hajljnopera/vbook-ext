function execute() {
    return Response.success([
        {title: "首页", input: "/", script: "gen.js"},
        {title: "玄幻", input: "/xuanhuan/", script: "gen.js"},
        {title: "武侠", input: "/wuxia/", script: "gen.js"},
        {title: "科幻", input: "/kehuan/", script: "gen.js"},
        {title: "历史", input: "/lishi/", script: "gen.js"},
        {title: "游戏", input: "/youxi/", script: "gen.js"},
        {title: "灵异", input: "/lingyi/", script: "gen.js"},
        {title: "都市", input: "/dushi/", script: "gen.js"},
        {title: "校园", input: "/xiaoyuan/", script: "gen.js"},
        {title: "婚恋", input: "/hunlian/", script: "gen.js"},
        {title: "总裁", input: "/zongcai/", script: "gen.js"},
        {title: "穿越", input: "/chuanyue/", script: "gen.js"},
        {title: "同人", input: "/tongren/", script: "gen.js"},
        {title: "新书", input: "/xinshu/", script: "gen.js"},
    ]);
}

// console.log([...document.querySelectorAll('.newnav a')].map(e => `{title: "${e.innerText}", input: "${e.href.replace(/^(?:\/\/|[^/]+)*/, '')}", script: "gen.js"},`).join('\n'));
function execute() {
    return Response.success([
        {title: "玄幻奇幻", input: "/c/xuanhuan/{0}", script: "gen.js"},
        {title: "言情", input: "/c/yanqing/{0}", script: "gen.js"},
        {title: "武俠仙俠", input: "/c/xianxia/{0}", script: "gen.js"},
        {title: "軍事曆史", input: "/c/lishi/{0}", script: "gen.js"},
        {title: "科幻未來", input: "/c/wangyou/{0}", script: "gen.js"},
        {title: "靈異玄幻", input: "/c/lingyi/{0}", script: "gen.js"},
        {title: "女生同人", input: "/c/tongren/{0}", script: "gen.js"},
        {title: "原創同人", input: "/c/erciyuan/{0}", script: "gen.js"},
        {title: "耽美", input: "/c/danmei/{0}", script: "gen.js"},
        {title: "百合", input: "/c/baihe/{0}", script: "gen.js"},
        {title: "日系", input: "/c/japan/{0}", script: "gen.js"},
        {title: "奇幻冒險", input: "/c/fanatsy/{0}", script: "gen.js"},
        {title: "情色工口", input: "/c/herotic/{0}", script: "gen.js"},
        {title: "耽美工口", input: "/c/blerotic/{0}", script: "gen.js"},
        {title: "經典文學", input: "/c/classicbook/{0}", script: "gen.js"},
        {title: "推理", input: "/c/suspense/{0}", script: "gen.js"},
        {title: "女性向", input: "/c/girl/{0}", script: "gen.js"},
        {title: "短篇", input: "/c/short/{0}", script: "gen.js"},
    ]);
}

// console.log([...document.querySelectorAll('.nav.menu a')].map(e => `{title: "${e.innerText}", input: "${e.href.replace(/^(?:\/\/|[^/]+)*/, '') + '/{0}'}", script: "gen.js"},`).join('\n'));
function execute() {
    return Response.success([
		{title: "玄幻", input: "xuanhuan", script: "cat.js"},
		{title: "武侠", input: "wuxia", script: "cat.js"},
		{title: "都市", input: "dushi", script: "cat.js"},
		{title: "历史", input: "lishi", script: "cat.js"},
		{title: "游戏", input: "youxi", script: "cat.js"},
		{title: "科幻", input: "kehuan", script: "cat.js"},
		{title: "恐怖", input: "xuanyi", script: "cat.js"},
		{title: "二次", input: "erciyuan", script: "cat.js"},
		{title: "经典", input: "jingdian", script: "cat.js"},
		{title: "古代", input: "guyan", script: "cat.js"},
		{title: "现代", input: "xianyan", script: "cat.js"},
		{title: "幻想", input: "huanqing", script: "cat.js"},
		{title: "浪漫", input: "qingchun", script: "cat.js"},
		{title: "网络", input: "mmyouxi", script: "cat.js"},
		{title: "科幻", input: "mmkehuan", script: "cat.js"},
		{title: "鬼怪", input: "lingyi", script: "cat.js"},
		{title: "N次", input: "Nciyuan", script: "cat.js"},
		{title: "言情", input: "yanqing", script: "cat.js"},
    ]);
}

// console.log([...document.querySelectorAll('#subnav a')].map(e => `{title: "${e.innerText}", input: "${e.href.replace(/^(?:\/\/|[^/]+)*/, '').replaceAll('/', '')}", script: "cat.js"},`).join('\n'));
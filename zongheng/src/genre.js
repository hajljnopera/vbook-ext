function execute() {
    return Response.success([
		{title: "全部作品", input: "0", script: "cat.js"},
		{title: "奇幻玄幻", input: "1", script: "cat.js"},
		{title: "武侠仙侠", input: "3", script: "cat.js"},
		{title: "历史军事", input: "6", script: "cat.js"},
		{title: "都市娱乐", input: "9", script: "cat.js"},
		{title: "科幻游戏", input: "15", script: "cat.js"},
		{title: "悬疑灵异", input: "18", script: "cat.js"},
		{title: "竞技同人", input: "21", script: "cat.js"},
		{title: "评论文集", input: "24", script: "cat.js"},
		{title: "二次元", input: "40", script: "cat.js"},
    ]);
}

// console.log([...document.querySelectorAll('.nr.br.sub a')].map(e => `{title: "${e.innerText.trim()}", input: "${e.getAttribute('categoryid')}", script: "cat.js"},`).join('\n'));
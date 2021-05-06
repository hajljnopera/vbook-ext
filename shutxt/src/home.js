function execute() {

    return Response.success([
        {title: "文学名著", input: "/mz/", script: "gen.js"},
        {title: "世界名著", input: "/waiguo/", script: "gen.js"},
        {title: "现代小说", input: "/xiandai/", script: "gen.js"},
        {title: "玄幻仙侠", input: "/xh/", script: "gen.js"},
        {title: "武侠小说", input: "/wx/", script: "gen.js"},
        {title: "言情小说", input: "/yq/", script: "gen.js"},
        {title: "耽美小说", input: "/danmei/", script: "gen.js"},
        {title: "古代言情小说", input: "/guyan/", script: "gen.js"},
        {title: "科幻小说", input: "/kh/", script: "gen.js"},
        {title: "历史小说", input: "/ls/", script: "gen.js"},
        {title: "军事小说", input: "/js/", script: "gen.js"},
        {title: "悬疑小说", input: "/xy/", script: "gen.js"},
        {title: "恐怖小说", input: "/kongbu/", script: "gen.js"},
        {title: "青春校园", input: "/xiaoyuan/", script: "gen.js"},
        {title: "人物传记", input: "/zj/", script: "gen.js"},
        {title: "人文社科", input: "/rw/", script: "gen.js"},
        {title: "散文随笔", input: "/sw/", script: "gen.js"},
        {title: "生活科普", input: "/sh/", script: "gen.js"},
        {title: "穿越小说", input: "/cy/", script: "gen.js"},
        {title: "古典文学名著", input: "/gudai/", script: "gen.js"},
        {title: "儿童文学", input: "/shaoer/", script: "gen.js"},
        {title: "励志书籍", input: "/lz/", script: "gen.js"},
        {title: "文学评论鉴赏", input: "/wxpl/", script: "gen.js"},
        {title: "网游小说", input: "/wy/", script: "gen.js"},
    ]);
}

// https://www.shutxt.com

// var arr = Array.from(document.querySelectorAll('.bkj')).map(e => {
// 	var o = {
// 		title: e.querySelector('h2').innerText,
// 		input: e.querySelector('.abc > a').href.replace(/^(?:\/\/|[^/]+)*/, '')
// 	}
// 	return o;
// });
// var s = '';
// arr.forEach(e => s += `        {title: "${e.title}", input: "${e.input}", script: "gen.js"},\n`);
// console.log(s);
function execute() {
    return Response.success([
        {title: "男生", input: "2_0", script: "cat.js"},
        {title: "玄幻奇幻", input: "2_21", script: "cat.js"},
        {title: "仙侠武侠", input: "2_24", script: "cat.js"},
        {title: "都市小说", input: "2_3", script: "cat.js"},
        {title: "历史军事", input: "2_22", script: "cat.js"},
        {title: "游戏竞技", input: "2_23", script: "cat.js"},
        {title: "科幻末世", input: "2_14", script: "cat.js"},
        {title: "悬疑推理", input: "2_29", script: "cat.js"},
        {title: "轻小说", input: "2_30", script: "cat.js"},
        {title: "女生", input: "3_0", script: "cat.js"},
        {title: "都市言情", input: "3_17", script: "cat.js"},
        {title: "古装言情", input: "3_5", script: "cat.js"},
        {title: "幻想言情", input: "3_18", script: "cat.js"},
        {title: "浪漫青春", input: "3_20", script: "cat.js"},
    ]);
}

// console.log([...document.querySelectorAll('.fllist-item:first-of-type a')].map(e => `{title: "${e.innerText.trim()}", input: "", script: "cat.js"},`).join('\n'));
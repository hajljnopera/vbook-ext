function execute() {
    return Response.success([
        {title: '首页', input: '/', script: 'gen.js'},
        {title: '玄幻魔法', input: '/class/1_1.html', script: 'gen.js'},
        {title: '武侠修真', input: '/class/2_1.html', script: 'gen.js'},
        {title: '都市言情', input: '/class/3_1.html', script: 'gen.js'},
        {title: '历史军事', input: '/class/4_1.html', script: 'gen.js'},
        {title: '侦探推理', input: '/class/5_1.html', script: 'gen.js'},
        {title: '网游动漫', input: '/class/6_1.html', script: 'gen.js'},
        {title: '科幻小说', input: '/class/7_1.html', script: 'gen.js'},
        {title: '恐怖灵异', input: '/class/8_1.html', script: 'gen.js'},
        {title: '其他类型', input: '/class/10_1.html', script: 'gen.js'},
        // {title: '', input: '', script: 'gen.js'},
    ]);
}
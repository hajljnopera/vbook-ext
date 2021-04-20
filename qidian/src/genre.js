function execute() {

    var data = [
        '玄幻|xuanhuan|21',
        '奇幻|qihuan|1',
        '武侠|wuxia|2',
        '仙侠|xianxia|22',
        '都市|dushi|4',
        '现实|xianshi|15',
        '军事|junshi|6',
        '历史|lishi|5',
        '游戏|youxi|7',
        '体育|tiyu|8',
        '科幻|kehuan|9',
        '悬疑|lingyi|10',
        '轻小说|2cy|12',
    ];

    data.forEach((item, index) => {
        var p = data[index].split('|');
        data[index] = {
            title: p[0],
            input: p[2],
            script: "cat.js"
        };
    })

    return Response.success(data);

    var data = [
        {
            input: "21",
            title: "玄幻",
            script: "cat.js"
        },
        {
            input: "1",
            title: "奇幻",
            script: "cat.js"
        },
        {
            input: "2",
            title: "武侠",
            script: "cat.js"
        },
        {
            input: "22",
            title: "仙侠",
            script: "cat.js"
        },
        {
            input: "4",
            title: "都市",
            script: "cat.js"
        },
        {
            input: "15",
            title: "现实",
            script: "cat.js"
        },
        {
            input: "6",
            title: "军事",
            script: "cat.js"
        },
        {
            input: "5",
            title: "历史",
            script: "cat.js"
        },
        {
            input: "7",
            title: "游戏",
            script: "cat.js"
        },
        {
            input: "8",
            title: "体育",
            script: "cat.js"
        },
        {
            input: "9",
            title: "科幻",
            script: "cat.js"
        },
        {
            input: "10",
            title: "悬疑",
            script: "cat.js"
        },
        {
            input: "12",
            title: "轻小说",
            script: "cat.js"
        }
    ];

    return Response.success(data);
}
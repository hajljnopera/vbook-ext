function execute(url) {
    let bookid = url.match(/\d+/)[0];
    url = "https://m.qidian.com/book/" + bookid + "/catalog/"
    let response = fetch(url, {
        headers: {
            'user-agent': UserAgent.android(), // set chế độ điện thoại
        }
    });
    if(response.ok){
    let doc = response.html()
    let text = doc.select("#vite-plugin-ssr_pageContext").html().replace(/\<\/?script(.*?)\"?\>/g, "");
    let json = JSON.parse(text);
    const data = [];
    let q_list = json.pageContext.pageProps.pageData.vs
    q_list.forEach((q) => {
        q.cs.forEach((e) => {
            data.push({
                name: e.cN,
                url: "https://vipreader.qidian.com/chapter/" + bookid + "/" + e.id,
                pay: e.sS == 1 ? false : true,
            })
        });
    })
        return Response.success(data);
    }
    return null;
}
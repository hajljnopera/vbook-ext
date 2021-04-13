function execute() {
    return Response.success([
        {title: "Lastest Manga", input: "https://mangakakalot.com/manga_list?type=latest&category=all&state=all", script: "gen.js"},
        {title: "Hot Manga", input: "https://mangakakalot.com/manga_list?type=topview&category=all&state=all", script: "gen.js"},
        {title: "New Manga", input: "https://mangakakalot.com/manga_list?type=newest&category=all&state=all", script: "gen.js"},
        {title: "Completed Manga", input: "https://mangakakalot.com/manga_list?type=newest&category=all&state=Completed", script: "gen.js"},
    ]);
}
function execute() {
    return Response.success([
        {title: "Fakku Comics", input: "/comics/album/Fakku-Comics/{0}", script: "gen.js"},
        {title: "Hentai and Manga English", input: "/comics/album/Hentai-and-Manga-English/{0}", script: "gen.js"},
    ]);
}
function execute() {
    return Response.success([
        {title: "Lastest Manga", input: "https://manganelo.com/genre-all/{0}", script: "gen.js"},
        {title: "Hot Manga", input: "https://manganelo.com/genre-all/{0}?type=topview", script: "gen.js"},
        {title: "Newest Manga", input: "https://manganelo.com/genre-all/{0}?type=newest", script: "gen.js"},
    ]);
}
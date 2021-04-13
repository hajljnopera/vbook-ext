function execute() {
    return Response.success([
        {title: "Lastest Manga", input: "https://manga18fx.com/page/{0}", script: "gen.js"},
    ]);
}
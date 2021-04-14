function execute() {
    return Response.success([
        {title: "Truyện Hot", input: "/tim-kiem/hot/page/{0}", script: "gen.js"},
    ]);
}
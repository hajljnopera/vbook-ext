function execute() {
    return Response.success([
        {title: "Truyện Hot", input: "/", script: "gen.js"},
    ]);
}
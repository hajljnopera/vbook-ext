function execute() {
    return Response.success([
        {title: "最近更新", input: '/update', script: "gen.js"},
        // {title: "", input: '', script: "gen.js"},
    ]);
}
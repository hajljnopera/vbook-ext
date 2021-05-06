function execute() {
    return Response.success([
        {title: "Home", input: "/page/{0}/", script: "gen.js"},
    ]);
}
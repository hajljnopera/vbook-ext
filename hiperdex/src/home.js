function execute() {
    return Response.success([
        {title: "Lastest", input: "/page/{0}", script: "gen.js"},
    ]);
}
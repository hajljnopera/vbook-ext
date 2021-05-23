function execute() {
    return Response.success([
        {title: "Lastest Update", input: "/latest-release/{0}", script: "gen.js"},
    ]);
}
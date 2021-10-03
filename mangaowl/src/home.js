function execute() {
    return Response.success([
        {title: "Lastest", input: "/lastest/{0}", script: "gen.js"},
        {title: "Popular", input: "/popular/{0}", script: "gen.js"},
        {title: "New Release", input: "/new_release/{0}", script: "gen.js"},
    ]);
}
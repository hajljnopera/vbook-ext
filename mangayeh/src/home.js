function execute() {
    return Response.success([
        {title: "Lastest", input: "/category/latest?page={0}", script: "gen.js"},
    ]);
}
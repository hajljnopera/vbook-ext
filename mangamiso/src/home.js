function execute() {
    return Response.success([
        {title: "Recently Updated", input: "/mangas-get/get-latestUpdate-mangas", script: "gen.js"},
        {title: "Newly Added Mangas", input: "/mangas-get/get-new-mangas", script: "gen.js"},
    ]);
}
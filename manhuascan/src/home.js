function execute() {
    return Response.success([
        {title: "Lastest Mangas", input: "/manga-list.html?listType=pagination&page={0}&sort=last_update&sort_type=DESC", script: "gen.js"},
    ]);
}
function execute() {
    return Response.success([
        {title: "New Manga", input: "/browse/?results={0}&filter=New", script: "gen.js"},
        {title: "Updated Manga", input: "/browse/?results={0}&filter=Updated", script: "gen.js"},
    ]);
}
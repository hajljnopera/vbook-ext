function execute() {
    return Response.success([
        {title: "Action", input: "Action", script: "gen.js"},
        {title: "Adult", input: "Adult", script: "gen.js"},
        {title: "Adventure", input: "Adventure", script: "gen.js"},
        {title: "Comedy", input: "Comedy", script: "gen.js"},
        {title: "Drama", input: "Drama", script: "gen.js"},
        {title: "Ecchi", input: "Ecchi", script: "gen.js"},
        {title: "Fantasy", input: "Fantasy", script: "gen.js"},
        {title: "Gender Bender", input: "Gender%20Bender", script: "gen.js"},
        {title: "Harem", input: "Harem", script: "gen.js"},
        {title: "Historical", input: "Historical", script: "gen.js"},
        {title: "Horror", input: "Horror", script: "gen.js"},
        {title: "Horror", input: "Horror", script: "gen.js"},
        {title: "Martial Art", input: "Martial%20Art", script: "gen.js"},
        {title: "Mature", input: "Mature", script: "gen.js"},
        {title: "Mecha", input: "Mecha", script: "gen.js"},
        {title: "Mystery", input: "Mystery", script: "gen.js"},
        {title: "Psychological", input: "Psychological", script: "gen.js"},
        {title: "Romance", input: "Romance", script: "gen.js"},
        {title: "School Life", input: "School%20Life", script: "gen.js"},
        {title: "Sci-fi", input: "Sci-fi", script: "gen.js"},
        {title: "Seinen", input: "Seinen", script: "gen.js"},
        {title: "Shoujo", input: "Shoujo", script: "gen.js"},
        {title: "Shoujo", input: "Shoujo", script: "gen.js"},
        {title: "Shojou Ai", input: "Shojou%20Ai", script: "gen.js"},
        {title: "Shounen", input: "Shounen", script: "gen.js"},
        {title: "Shounen Ai", input: "Shounen%20Ai", script: "gen.js"},
        {title: "Slice of Life", input: "Slice%20of%20Life", script: "gen.js"},
        {title: "Sports", input: "Sports", script: "gen.js"},
        {title: "Supernatural", input: "Supernatural", script: "gen.js"},
        {title: "Tragedy", input: "Tragedy", script: "gen.js"},
        {title: "Yuri", input: "Yuri", script: "gen.js"},
        {title: "4 Koma", input: "4%20Koma", script: "gen.js"},
        {title: "Doujinshi", input: "Doujinshi", script: "gen.js"},
        {title: "Doujinshi", input: "Doujinshi", script: "gen.js"},
        {title: "Demons", input: "Demons", script: "gen.js"},
        {title: "Josei", input: "Josei", script: "gen.js"},
        {title: "Magic", input: "Magic", script: "gen.js"},
        {title: "One shot", input: "One%20shot", script: "gen.js"},
        {title: "Super Power", input: "Super%20Power", script: "gen.js"},
        {title: "Smut", input: "Smut", script: "gen.js"},
        {title: "Yaoi", input: "Yaoi", script: "gen.js"},
    ]);
}

/*

var arr = Array.from(document.querySelectorAll('.dropdown-menu a')).map(e => {
	var o = {
		title: e.innerText,
		input: e.href.match(/-genre-(.+)\.html/)[1],
	}
	return o;
});
var s = '';
arr.forEach(e => s += `        {title: "${e.title}", input: "${e.input}", script: "cat.js"},\n`);
console.log(s);

*/
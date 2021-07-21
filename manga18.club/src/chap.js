load('libs.js');
load('base64.js');

function execute(url) {
    var src = Http.get(url).string();

    var slides_p_path = src.match(/var slides_p_path = \[(.*?)\]/);
    if (slides_p_path && slides_p_path[1]) {
        var imgArr = extractAllText(slides_p_path[1]);

        if (imgArr.length > 0) {
            return Response.success(imgArr.map(x => new Base64().decode(x)));
        }
    }

    return Response.error(url);
}

function extractAllText(str) {
    var re = /"(.*?)"/g;
    var result = [];
    var current;
    while (current = re.exec(str)) {
        result.push(current.pop());
    }
    return result;
}
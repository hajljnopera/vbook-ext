load('libs.js');

function execute(url) {
    var host = 'https://mangamiso.net';
    var source = Http.get(url).string();
    var imgs = [];

    var sPages = source.match(/pages\s*:\s*(\[.+?\])/);
    if (sPages && sPages[1]) {
        var regex = /path\s*:\s*["']([^"']+)["']/gm, m;
        while ((m = regex.exec(sPages[1])) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
                if (groupIndex == 1) {
                    var img = JSON.parse('"' + match + '"');
                    // log(img);
                    imgs.push(img.mayBeFillHost(host));
                }
            });
        }
    }

    if (imgs.length) return Response.success(imgs);

    return Response.error(url);
}
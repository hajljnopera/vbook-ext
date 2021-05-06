load('libs.js');

function execute(url) {
    var data = Http.get(url).string();

    var chapterImages = data.match(/chapImages\s*=\s*(\[[^\]]+\])/);
    var preloadedImages = data.match(/chapter_preloaded_images\s*=\s*(\[[^\]]+\])/);

    var imgs = JSON.parse((chapterImages || preloadedImages)[1]);
    // log(imgs);

    return imgs.length ? Response.success(imgs) : Response.error(url);
}
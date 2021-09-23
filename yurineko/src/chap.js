load('libs.js');

function execute(url) {
    var host = 'https://yurineko.net';
    url = url.replace('manga', 'read');
    // log(url);
    var source = Http.get(url).string();
    // log(source);
    var script = $.Q(Html.parse(source), 'script#__NEXT_DATA__').html();
    // log(script);
    var data = JSON.parse(script);
    var imgs = data.props.pageProps.chapterData.url;
    // log(imgs);
    if (imgs.length) return Response.success(imgs);
    return Response.error(url);
}
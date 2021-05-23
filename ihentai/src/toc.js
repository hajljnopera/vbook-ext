load('libs.js');

function execute(url) {
    var host = urlGetHost(url);
    return Response.success([{
        name: 'Chapter',
        url: url,
        host: host
    }])
}
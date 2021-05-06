load('libs.js');

function execute(url) {
    var host = 'https://hentaic.net';
    return Response.success([{
        name: 'Chapter',
        url: url,
        host: host
    }])
}
load('libs.js');

function execute(url, page) {
    var host = 'https://www.cijige.com';
    var url = String.format(host + url, page || '1');
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var data = [];

        var elems = $.QA(doc, '.rankcontent');
        if (!elems.length) return Response.error(url);
        
        elems.forEach(function(e) {
            data.push({
                name: $.Q(e, '.ranktitle a').text(),
                link: $.Q(e, '.ranktitle a').attr('href').mayBeFillHost(host),
                cover: $.Q(e, '.rankdetail img').attr('src'),
                description: $.Q(e, '.ranktitle', { remove: 'strong' }).text(),
                host: host
            })
        })

        var next = $.Q(doc, '.pages span + a').text();
        if (next) {
            return Response.success(data, next);
        }

        return Response.success(data);
    }
    return null;
}
load('libs.js');

function execute(url) {
    var doc = Http.get(url).html();

    return Response.success({
        name: $.Q(doc, 'div.profile-manga > div > div.post-title > h1').text().trim(),
        cover: $.Q(doc, 'div.summary_image > a > img').attr('src'),
        author: $.Q(doc, 'div.post-content > div:nth-child(3) > div.summary-content > div').text(),
        description: $.Q(doc, 'div.panel-story-description > div').html(),
        detail: $.Q(doc, 'div.summary_content_wrap > div > div.post-content', {remove: ['div.post-rating']}).text(),
        host: 'https://manga18fx.com',
        ongoing: $.Q(doc, 'div.summary_content_wrap > div > div.post-status > div:nth-child(2) > div.summary-content').text().includes('OnGoing')
    });
}

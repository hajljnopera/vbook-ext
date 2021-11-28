load('libs.js');

function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        const vipAlert = '<br><br>----------<br>这是VIP章节, 需要订阅后才能阅读';
        var htm = $.Q(doc, 'div.read-content.j_readContent').html();

        if (htm != '') {
            if (url.includes('vipreader')) {
                // VIP chapter with demo
                // Ex: https://vipreader.qidian.com/chapter/1019664125/534766533
                return Response.success(htm + vipAlert );
            }
            else { // Free chapter
                return Response.success(htm);
            }
        }

        // Free chapter in VIP volume
        // Ex: https://vipreader.qidian.com/chapter/1019664125/643537011

        var cookies = http.cookie();
        var _csrfToken = cookies.match(/_csrfToken=(.*?);/)[1];
        var bookId = '', chapterId = '', authorId = '';
        var bm = $.Q(doc, '.book-mark[data-cid][data-bid][data-auid]');
        if (bm != '') {
            bookId = bm.attr('data-bid'), chapterId = bm.attr('data-cid'), authorId = bm.attr('data-auid');
        }
        // log([_csrfToken, bookId, chapterId, authorId]);
        var chapterInfoAjax = 'https://vipreader.qidian.com/ajax/chapter/chapterInfo?_csrfToken={0}&bookId={1}&chapterId={2}&authorId={3}';
        chapterInfoAjax = String.format(chapterInfoAjax, _csrfToken, bookId, chapterId, authorId);
        var res = Http.get(chapterInfoAjax).string();
        // log(res);
        var j = JSON.parse(res);
        if (j.code == 0) {
            var content = j.data.chapterInfo.content;
            if (content) return Response.success(content);
        }

        return Response.success(vipAlert);
    }
    return null;
}
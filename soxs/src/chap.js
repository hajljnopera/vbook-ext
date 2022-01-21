load('libs.js');

function execute(url) {
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();

        const huhuhu = '<br><br>(╥﹏╥)<br><br>(>_<)<br><br>(ಥ﹏ಥ)<br><br>(ﾉಥ﹏ಥ）ﾉ  ┻━┻';

        // Ex: https://m.soxs.cc/SiHeYuanCongShaZhuShiXiongKaiShi/2564459.html
        if ($.QA(doc, '.content img').length) {
            return Response.success('Chương truyện chứa hình ảnh!!!' + huhuhu);
        }

        var htm = $.Q(doc, '.content', {remove: 'p'}).html();

        if (hasInvalidContent(htm)) return Response.success('Chương truyện không có nội dung!!!' + huhuhu);

        htm = cleanHtml(htm);

        // Ex: https://www.soxs.cc/ShiXiongXiaoShiMeiYouBaShanMenChaiLiao/110895.html
        htm = htm.replace(/^\s*第\d+章.*?<br>/, '');

        htm = htm.replace(/^.*?soxs.*?<br>/gm, '');

        // log(htm);
        return Response.success(htm);
    }
    return null;
}

function hasInvalidContent(s) {
    return s.includes('章节内容获取失败') // [1]
        && s.includes('如果你刷新多次还无法显示内容，请通过意见反馈通知我们，我们会在第一时间修复！') // [2]
    ;
}

/*
[1]: Không lấy được nội dung chương 
[2]: Nếu bạn làm mới nhiều lần mà vẫn không hiển thị được nội dung, vui lòng thông báo cho chúng tôi qua phản hồi và chúng tôi sẽ khắc phục trong thời gian sớm nhất! 
*/

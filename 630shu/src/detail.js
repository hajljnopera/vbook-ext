String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url) {
    var host = 'https://www.630shu.net';
    // https://m.630shu.net/book_43404 --> https://www.630shu.net/shu/43404.html
    url = url.replace(/m\.630shu\.net\/(chapters|book)_(\d+)\/?$/gm, 'www.630shu.net/shu/$2.html');
    var doc = Http.get(url).html('gbk');

    var coverImg = $.Q(doc, '#picbox > div.img_in > img').attr('src').mayBeFillHost(host);
    var author = $.Q(doc, '#info > div.options > span:nth-child(1) > a').text().trim();
    var lastUpdated = $.Q(doc, '#info > div.update').text();

    return Response.success({
        name: $.Q(doc, '#info > h1').text(),
        cover: coverImg,
        author: author,
        description: $.Q(doc, '#intro').text(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}

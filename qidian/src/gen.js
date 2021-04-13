String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url, page) {
    var host = 'https://www.qidian.com';
    url = String.format(host + url, page || 1);

    var doc = Http.get(url).html();
    var data = [];

    var elems = $.QA(doc, '#rank-view-list > div > ul > li');

    var next = $.Q(doc, '#rank-view-list > div > ul > li:nth-child(1) > div.book-img-box > span').text();
    if (next) next = 2 + parseInt(parseInt(next)/20); // 20 items/page

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.book-mid-info > h4 > a').text(),
            link: $.Q(e, 'div.book-mid-info > h4 > a').attr('href').mayBeFillHost(host),
            cover: $.Q(e, 'div> a > img').attr('src').mayBeFillHost(host),
            description: $.Q(e, 'div.book-mid-info > p.update > a').text().replace('最新更新', '').trim(),
            host: host
        })
    })

    return Response.success(data, next)
}
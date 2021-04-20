String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url, page) {
    var host = 'https://www.qidian.com';

    var doc = Http.get(host + '/all').params({
        'chanId': url,
        'orderId': '',
        'style': 1,
        'pageSize': 20,
        'siteid': 1,
        'pubflag': 0,
        'hiddenField': 0,
        'page': page || '1',
    }).html();

    var data = [];

    var elems = $.QA(doc, 'li[data-rid]');

    var next = $.Q(doc, 'a.lbf-pagination-page.lbf-pagination-current').text();
    if (next) next = parseInt(next, 10) + 1;

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.book-mid-info > h4 > a').text(),
            cover: $.Q(e, 'div.book-img-box img').attr('src').mayBeFillHost(host),
            link: $.Q(e, 'div.book-mid-info > h4 > a').attr('href').mayBeFillHost(host),
            description: $.Q(e, 'p.author').text(),
            host: host
        })
    })

    return Response.success(data, next.toString());
}
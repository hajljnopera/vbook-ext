String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url, page) {
    if (!page) page = '1';
    var host = 'https://manga18fx.com';
    url = String.format(url, page);
    var doc = Http.get(url).html();

    var next = $.Q(doc, '#blog-pager > ul > li.active + li').text();

    var elems = $.QA(doc, 'div.page-item');
    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').text(),
            link: $.Q(e, 'div.bsx-item > div.bigor-manga > h3 > a').attr('href'),
            cover: $.Q(e, 'div.bsx-item > div.thumb-manga > a > img').attr('src'),
            description: $.Q(e, 'div.bsx-item > div.bigor-manga > div.list-chapter > div').text(),
            host: host
        })
    });

    return Response.success(data, next);
}

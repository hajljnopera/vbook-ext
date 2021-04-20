String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url, page) {

    var host = 'https://mangayeh.com';
    url = String.format(host + url, page || '1');
    var doc = Http.get(url).html();

    var elems = $.QA(doc, 'h1.title + div a.box');
    var data = [];
    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, 'div.mtitle').text(),
            link: e.attr('href'),
            cover: $.Q(e, 'img.athumbnail').attr('data-src'),
            description: $.Q(e, 'span.ellipsis.is-ellipsis-1').text().replace('Last chapter:', '').trim(),
            host: host
        })
    });

    var next = $.Q(doc, 'a[aria-current].button.is-link').text();
    if (next) next = parseInt(next, 10) + 1;

    return Response.success(data, next.toString());
}
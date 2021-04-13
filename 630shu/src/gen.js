String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url, page) {
    var host = 'https://www.630shu.net';
    if (!page) page = '1';
    url = String.format('{0}/{1}/{2}.html', host, url, page);
    var doc = Http.get(url).html('gbk');

    var next = parseInt($.Q(doc, '#pagestats').text().match(/(\d+)\//)[1]) + 1;
    var data = [];

    var elems = $.QA(doc, '#tlist > ul > li');

    elems.forEach(function(e) {
        var link = $.Q(e, 'div.zp > a').attr('href');
        var m, id, cover;

        if ((m = link.match(/(\d+)\.html$/)) && m[1] && (id = m[1])) {
            cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
            // https://www.630shu.net/files/article/image/184/184279/184279s.jpg
        }

        data.push({
            name: $.Q(e, 'div.zp > a').text(),
            link: link,
            cover: cover || 'https://www.630shu.net/modules/article/images/nocover.jpg',
            description: $.Q(e, 'div.zz > a').text(),
            host: host
        })
    })

    return Response.success(data, next.toString());
}

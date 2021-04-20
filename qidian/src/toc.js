String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(url) {

    var host = 'https://book.qidian.com';
    url = url.replace(/m\.qidian\.com\/book\/(\d+)/, 'book.qidian.com/info/$1');

    var http = Http.get(url);
    var doc = http.html();
    var data = [];

    parseDoc(doc, data);
    if (data.length) return Response.success(data);

    // API
    var bookId = url.match(/qidian\.com\/(info|book)\/(\d+)/)[2];
    var cookies = http.cookie();
    var _csrfToken = cookies.match(/_csrfToken=(.*?);/)[1];

    var ajaxUrl = 'https://book.qidian.com/ajax/book/category?_csrfToken={0}&bookId={1}';
    var json = Http.get(String.format(ajaxUrl, _csrfToken, bookId)).string();

    var j = JSON.parse(json);

    if (j.code == 1) return Response.error(url);

    var freeFm = 'https://read.qidian.com/chapter/{0}/{1}';
    var vipFm = 'https://vipreader.qidian.com/chapter/{0}/{1}';
    
    j.data.vs.forEach(function(section){
        var chapters = section.cs;
        chapters.forEach(function(chap){
            data.push({
                name: (section.hS ? '[VIP] ' : '') + chap.cN,
                url: String.format(section.hS ? vipFm : freeFm, bookId, chap.id),
                host: 'https://www.qidian.com'
            })
        })
    })

    if (data.length) return Response.success(data);

    return Response.error(url);
}


function parseDoc(doc, arr) {
    var elems = $.QA(doc, '#j-catalogWrap > div.volume-wrap > div > ul > li');
    if (!elems.length) return;

    var host = 'https://book.qidian.com';

    elems.forEach(function(e) {
        var url = $.Q(e, 'a').attr('href').mayBeFillHost(host);
        var vip = url.includes('vipreader') ? '[VIP] ' : '';

        arr.push({
            name: vip + $.Q(e, 'a').text(),
            url: url,
            host: host
        })
    })
}



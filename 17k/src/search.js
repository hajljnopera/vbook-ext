String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,function(t,r){return void 0!==e[r]?e[r]:t})}),String.prototype.append=function(t){return this.endsWith(t)?this:this+t},String.prototype.prepend=function(t){return this.startsWith(t)?this:t+this},String.prototype.rtrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return null==t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.mayBeFillHost=function(t){var r=this.trim();return r?r.startsWith(t)?r:r.startsWith("//")?t.split("//")[0]+r:t.rtrim("/")+"/"+r.ltrim("/"):""};var $={Q:function(t,r,e){var i=Html.parse("").select("body"),r=t.select(r);return""==r||0==r.size()?i:null==e?r.first():"number"==typeof e?-1==e?r.last():e>=r.size()?i:r.get(e):(e.remove&&r.select(e.remove).remove(),r)},QA:function(t,r,e){var i=[],n=t.select(r);if(e=e||{},""==n||0==n.size())return e.j?"":i;function s(t){(!e.f||e.f(t))&&i.push(e.m?e.m(t):t)}if(e.reverse)for(var o=n.size()-1;0<=o;o--)s(n.get(o));else for(o=0;o<n.size();o++)s(n.get(o));return e.j&&"string"==typeof e.j?i.join(e.j):i}};
function execute(key, page) {
    var host = 'https://www.17k.com';

    var appKey = 2406394919; // https://static.17k.com/js/main.js?v=042021

    page = page || '1';
    var url = 'http://api.ali.17k.com/v2/book/search?sort_type=0&app_key=${appKey}&_access_version=2&cps=0&channel=2&_versions=1070&merchant=17KH5&page=1&client_type=1&_filter_data=1&class=0&key=${key}&page=${page}';
    url = url.replace('${appKey}', appKey).replace('${key}', key).replace('${page}', page);

    var json = Http.get(url).string();
    var j = JSON.parse(json);

    if (j.status.code != 0) return Response.error('Retry');

    var data = [];
    j.data.forEach(function(item){
        if (!item.id) return;
        data.push({
            name: item.book_name,
            link: String.format('https://www.17k.com/book/{0}.html', item.id),
            cover: item.cover,
            description: item.author_name,
            host: host
        })
    })

    var currentPage = j.cur_page;
    var totalPage = j.total_page;

    if (currentPage <= totalPage) return Response.success(data, (currentPage+1).toString());

    return Response.success(data);
}
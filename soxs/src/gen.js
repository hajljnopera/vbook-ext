load('libs.js');

function execute(url, page) {
    var host = 'https://www.soxscc.cc';
    if (!page) page = '1';
    var hasNextPage = url != '/';
    var newUrl = String.format(host + url + (page == '1' ? '' : '{0}.html'), page);
    // log(newUrl);

    var response = fetch(newUrl);
    if (response.ok) {
        var doc = response.html();

		var data = [];

		var elems = $.QA(doc, '#newscontent > .l li');
		if (!elems.length) return Response.error(url);

		var imgErr = host + '/static/image/nocover.jpg';

		elems.forEach(function(e) {
			var link = $.Q(e, '.s2 > a').attr('href');
			data.push({
				name: $.Q(e, '.s2 > a').text(),
				link: link,
				cover: genCover(link, host) || imgErr,
				description: $.Q(e, '.s3 > a').text(),
				host: host
			})
		})

		// log(data);

		if (!hasNextPage) {
			return Response.success(data);
		}

		var m, next;
		var currentPage = $.Q(doc, 'div.pagelink > a.pgchu').text();
		if (currentPage && (m = currentPage.match(/(\d+)/)) && m[1]) {
			next = parseInt(m[1]) + 1;
		}
		else {
			next = 2;
		}

		return Response.success(data, next.toString());
    }
    return null;
}

function genCover(link, host) {
    var response = fetch(host + link);
    if (response.ok) {
        var doc = response.html();
	
		var img = $.Q(doc, 'meta[property="og:image"]').attr('content');
		if (img) return img.prepend('https:');
    }

    return '';
}
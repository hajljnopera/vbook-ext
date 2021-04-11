// https://stackoverflow.com/a/4673436
if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

String.prototype.append = function(w) {
    if (this.endsWith(w)) return this;
    return this + w;
}

String.prototype.prepend = function(w) {
    if (this.startsWith(w)) return this;
    return w + this;
}

String.prototype.rtrim = function(s) {
    if (s == undefined) s = '\\s';
    return this.replace(new RegExp("[" + s + "]*$"), '');
}

String.prototype.ltrim = function(s) {
    if (s == undefined) s = '\\s';
    return this.replace(new RegExp("^[" + s + "]*"), '');
}

String.prototype.mayBeFillHost = function(host) {
    if (!this) return '';
    if (this.startsWith(host)) return this;
    if (this.startsWith('//')) return host.split('//')[0] + this;

    return host.rtrim('/') + '/' + this.ltrim('/');
};


// --------------------------------------------------

String.prototype.Q = function(e, q, i) {
    if (this == '$') {
        var _empty = Html.parse('').select('body');

        var els = e.select(q);
        if (els == '' || els.size() == 0) return els;
        if (i == undefined) return els.first();
        if (i == -1) return els.last();
        if (i > els.size()) return _empty;

        return els.get(i);
    }
}


String.prototype.QA = function(e, q, o) {
    if (this == '$') {
    var arr = [];
    var els = e.select(q);
    if (els == '' || els.size() == 0) return arr;

    if (o && o.reverse) {
        for (var i = els.size() - 1; i >= 0; i--) {
            arr.push(els.get(i));
        }
    } else {
        for (var i = 0; i < els.size(); i++) {
            arr.push(els.get(i));
        }
    }

    return arr;
    }
}


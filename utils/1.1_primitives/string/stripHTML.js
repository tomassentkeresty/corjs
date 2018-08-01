var HTML_CHARACTERS = {
    'nbsp': ' ',
    'amp': '&',
    'quot': '"',
    'lt': '<',
    'gt': '>'
};

String.prototype.$stripHTML = function() {
    var self = this.replace(/<\/?[^>]+(>|$)/g, '');
    return self.replace(/&(nbsp|amp|quot|lt|gt);/g, function(match, k) {
        return HTML_CHARACTERS[k] || k;
    });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Example_2_Get_a_sample_cookie_named_test2
window.Cookie = {
    get: function(k) {
        var str = document.cookie;
        var i = str.indexOf(k + '=');
        if (i === -1) {
            return undefined;
        }
        if (i > 0 && str[i - 1] !== ' ') {
            return undefined;
        }
        var j = i + k.length + 1;
        var end = str.indexOf(';', j);
        return decodeURIComponent(str.slice(j, end === -1 ? undefined : end));
    }
};

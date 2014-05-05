/**
 * Created by Egor_Miasnikov on 02.05.2014.
 */
function API(){

    var xhr;

    xhr = function (type, url, data, contentType) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open(type, url, true);
            req.setRequestHeader("Content-Type", contentType);
            req.onload = function () {
                if (this.status === 200 && (this.response.charAt(0) === "{" || this.response.charAt(0) === "[")) {
                    var result = JSON.parse(this.response);
                    resolve(result);
                } else {
                    reject(this.responseText);
                }
            };
            req.onerror = function (e) {
                reject(e);
            };

            req.send(data);
        });
    };

    this.get = function (url) {
        var type = 'GET',
            data = false,
            contentType = 'text/plain; charset=UTF-8';
        return xhr(type, url, data, contentType);
    };
    this.post = function (url, data) {
        var type = 'POST',
            contentType = "application/json;charset=UTF-8";
        return xhr(type, url, JSON.stringify(data), contentType);
    };
    this.put = function (url, data) {
        var type = 'PUT',
            contentType = "application/json;charset=UTF-8";
        return xhr(type, url, JSON.stringify(data), contentType);
    };
    this.delete = function (url) {
        var type = 'DELETE',
            data = false,
            contentType = 'text/plain; charset=UTF-8';
        return xhr(type, url, data, contentType);
    };
};
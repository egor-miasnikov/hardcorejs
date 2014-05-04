/**
 * Created by Egor_Miasnikov on 02.05.2014.
 */
function API(){

    var xhr = function(type, url, data){
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open(type, url, false);
            req.send(data);
            if(req.status === 200){
                var result = JSON.parse(req.response);
                resolve(result);
            }else{
                reject(req.responseText);
            }
        });
    };
    this.get = function(url) {
        var type = 'GET',
            data = false;
        return xhr(type, url, data);
    };
    this.query = function(url) {
        var type = 'GET',
            data = false;
        return xhr(type, url, data);
    };
    this.post = function(url, data){
        var type = 'POST';
        return xhr(type, url, JSON.stringify(data));
    };
    this.put = function(url, data){
        var type = 'PUT';
        return xhr(type, url, JSON.stringify(data));
    };
    this.delete = function(url){
        var type = 'DELETE',
            data = false;
        return xhr(type, url, data);
    };
}
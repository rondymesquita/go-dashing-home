HttpClient = (function () {

    function Module() {
        var url = "";
        var data = "";
        var method = "GET";
    }

    Module.prototype.get = function (url) {
        this.url = url;
        this.method = "GET";
        return this;
    };

    Module.prototype.post = function (url) {
        this.url = url;
        this.method = "POST";
        return this;
    };

    Module.prototype.withBody = function (data) {
        this.data = data;
        return this;
    };

    Module.prototype.send = function () {
        return $.ajax({
            url: this.url,
            type: this.method
        });
    };


    return Module;

})();
ShellExecuter = (function () {

    function Module() {
        this.url = "/shell/exec?file="
    }

    Module.prototype.shell = function (file) {
        this.file = file;
        return this;
    };

    Module.prototype.execute = function () {
        return $.ajax({
            url: this.url + this.file,
            type: "GET"
        });
    };

    return Module;

})();
WidgetHTMLLoader = (function() {

    function Module() {
        this.template = ''
    }

    Module.prototype.load = function(widget){
        var self = this;
        request = $.ajax({
            url: "/templates/" + widget,
            type: "GET",
            async: false
        });

        request.done(function (data) {
            self.template = data;
        });

        request.fail(function (data) {
            console.log("fail")
            console.log(data)
        });
        return this;
    }

    Module.prototype.into = function(element){
        $(element).prepend(this.template);
    }

    return Module;

})();
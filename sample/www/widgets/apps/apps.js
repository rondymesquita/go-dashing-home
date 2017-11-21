var __hasProp = {}.hasOwnProperty,
    __extends = function (child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }

        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };

Dashing.Apps = (function (_super) {
    __extends(Apps, _super);

    function Apps() {
        return Apps.__super__.constructor.apply(this, arguments);
    }

    Apps.prototype._load_apps = function () {
        var self = this;
        request = $.ajax({
            url: "/assets/json/apps.json",
            type: "GET",
            dataType: "json"
        });

        request.done(function (data) {
            // console.log(data)
            self.set("appList", data)
        });

        request.fail(function (data) {
            console.log("fail")
            console.log(data)
        });
    }

    Apps.prototype.ready = function() {
        self = this;
        this._load_apps();
    };

    return Apps;

})(Dashing.Widget);

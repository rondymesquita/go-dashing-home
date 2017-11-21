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

Dashing.App = (function (_super) {
    __extends(App, _super);

    function App() {
        return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.sendrequest = function () {
        self = this
        console.log(arg)

        // request = $.ajax({
        //     url: "/command/exec",
        //     type: "POST",
        //     data: "{\"Commands\": [[\"echo\", \"hello\"], [\"firefox\"]]}",
        //     dataType: "json"
        // });
        //
        // request.done(function (data) {
        //     console.log(data)
        //     self.set('button', 'Fulano');
        // });
        //
        // request.fail(function (data) {
        //     console.log("fail")
        //     console.log(data)
        // });
    }

    App.prototype.viewDidAppear = function () {

    };

    App.prototype.ready = function () {
        var self = this;

        SpatialNavigation.init();
        SpatialNavigation.add({
            selector: '.data-navigable'
        });

        SpatialNavigation.makeFocusable();
        SpatialNavigation.focus();

        this.navigableElements = document.querySelectorAll(".data-navigable");

        this.blurAllNavigableElements = function(){
            this.navigableElements.forEach(function (element) {
                element.blur();
            });
        };

        this.handleMouseEnter = function (event) {
            SpatialNavigation.focus(event.target);
        };

        this.handleMouseLeave = function (event) {
            self.blurAllNavigableElements();
        };

        this.navigableElements.forEach(function (element) {
            element.addEventListener("mouseenter", self.handleMouseEnter);
            element.addEventListener("mouseleave", self.handleMouseLeave);
        });

    };

    return App;

})(Dashing.Widget);

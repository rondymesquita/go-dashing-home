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

Dashing.Switch = (function (_super) {
    __extends(Switch, _super);

    function Switch() {
        httpClient = new HttpClient();
        return Switch.__super__.constructor.apply(this, arguments);
    }

    Switch.prototype.viewDidAppear = function(){
        console.log(this.get("fulano"));
        console.log(this.get("service.command_start"));
    };

    Switch.prototype.ready = function (e) {
        var self = this;
        $(".widget-switch .switch").bootstrapSwitch();

        $(".widget-switch .switch").on('switchChange.bootstrapSwitch', function(event, state) {
            console.log(this.id); // DOM element
            console.log(event); // jQuery event
            console.log(state); // true | false


            // if(state){
            //     self.enable
            // }
        });

    };

    Switch.prototype.onData = function (data) {
        console.log(data)
    };

    return Switch;

})(Dashing.Widget);




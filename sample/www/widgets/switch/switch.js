(function () {
    var deferred = jQuery.Deferred();
    var promise = deferred.promise();

    window.switchWidget = Vue.component('switch-widget', {
        template: '#hello-world-template',
        props: ['name', 'service'],
        data: function () {
            return {
                deferred: deferred,
                promise: promise
            }
        },
        mounted: function () {
            var selector = "input[name='" + this.name + "']";
            $(selector).bootstrapSwitch();
            $(selector).on('switchChange.bootstrapSwitch', this.onChange);
            this.$data.deferred.resolve("switch mounted");
        },
        methods: {
            onChange: function (event, state) {
                if (state) {
                    this.enable();
                } else {
                    this.disable();
                }
            },
            enable: function () {

            },
            disable: function () {

            }
        }
    });

})();
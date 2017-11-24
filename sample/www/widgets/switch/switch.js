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
            $(this.selector()).bootstrapSwitch();
            $(this.selector()).on('switchChange.bootstrapSwitch', this.onChange);
            this.$data.deferred.resolve("switch mounted");
        },
        methods: {
            selector : function(){
                return "input[name='" + this.name + "']";
            },
            onChange: function (event, state) {
                // $(this.selector()).bootstrapSwitch('setDisabled', true);
                if (state) {
                    this.enable();
                } else {
                    this.disable();
                }
                // $(this.selector()).bootstrapSwitch('setDisabled', false);
            },
            enable: function () {
                console.log(this.service.shell_start)
                new ShellExecuter()
                    .shell(this.service.shell_start)
                    .execute()
                    .done(function (data, text, xhr) {
                        console.log("success")
                        console.log(data, text)
                    }).fail(function (xhr, status, error) {
                        console.log("fail")
                        console.log(status, error)
                    });

            },
            disable: function () {
                new ShellExecuter()
                    .shell(this.service.shell_stop)
                    .execute()
                    .done(function (data, text, xhr) {
                        console.log("success")
                        console.log(data, text)
                    }).fail(function (xhr, status, error) {
                    console.log("fail")
                    console.log(status, error)
                });

            }
        }
    });

})();
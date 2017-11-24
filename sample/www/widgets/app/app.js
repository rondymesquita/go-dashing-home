(function () {
    var deferred = jQuery.Deferred();
    var promise = deferred.promise();

    window.appWidget = Vue.component('app-widget', {
        template: '#app-template',
        props: ['app'],
        data: function () {
            return {
                deferred: deferred,
                promise: promise
            }
        },
        mounted: function () {
            this.$data.deferred.resolve("app mounted");
        },
        methods: {
            open: function () {
                request = $.ajax({
                    url: "/command/exec",
                    type: "POST",
                    data: "{\"Commands\": [[\"echo\", \"hello\"], [\"firefox\"]]}",
                    dataType: "json"
                });

                request.done(function (data) {
                    console.log(data)
                    self.set('button', 'Fulano');
                });

                request.fail(function (data) {
                    console.log("fail")
                    console.log(data)
                });
            }
        }
    });

})();

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
                $.ajax({
                    url: "/command/exec",
                    type: "POST",
                    data: "{\"Commands\": [[\"echo\", \"hello\"], [\"firefox\"]]}",
                    dataType: "json"
                }).done(function (data, text, jq) {
                    console.log("success")
                    console.log(data)
                }).fail(function (data, text, jq) {
                    console.log("fail")
                    console.log(data)
                });
            }
        }
    });

})();

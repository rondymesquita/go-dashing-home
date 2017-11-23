Vue.component('services-widget', {
    template: '#services-template',
    data: function(){
        return {
            services: []
        }
    },
    beforeCreate: function(){
        var self = this;
        request = $.ajax({
            url: "/assets/json/services.json",
            type: "GET",
            dataType: "json"
        });

        request.done(function (resp) {
            self.$data.services = resp
        });

        request.fail(function (data) {
            console.log("fail loading services")
            console.log(data)
        });
    },
    methods:{
        clickhere: function(){
            alert()
        }
    }
});
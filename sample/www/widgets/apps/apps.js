Vue.component('apps-widget', {
    template: '#apps-template',
    props:[],
    data: function(){
        return {
            apps: []
        }
    },
    beforeMount: function(){
        this.load_apps()
    },
    methods:{
        load_apps: function(){
            var self = this;
            request = $.ajax({
                url: "/assets/json/apps.json",
                type: "GET",
                dataType: "json"
            });

            request.done(function (data) {
                console.log(data)
                self.$data.apps = data
            });

            request.fail(function (data) {
                console.log("fail")
                console.log(data)
            });
        }
    }
});


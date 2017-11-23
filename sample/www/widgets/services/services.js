Vue.component('services-widget', {
    template: '#services-template',
    data: function(){
        return {
            services: [
                {
                    "name": "plex",
                    "icon": "/assets/images/firefox.jpg",
                    "handler": "plex",
                    "id": "switch-plex",
                    "command_start": "docker start pg",
                    "command_stop": "docker stop pg",
                    "command_status": "docker ps"
                },
                {
                    "name": "qbitorrent",
                    "icon": "/assets/images/firefox.jpg",
                    "handler": "qbitorrent",
                    "id": "switch-qbitorrent",
                    "command_start": "",
                    "command_stop": "",
                    "command_status": ""
                }
            ]
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
            console.log(self.data)
        });

        request.fail(function (data) {
            console.log("fail")
            console.log(data)
        });
    },
    mounted: function(){
    },
    methods:{
        clickhere: function(){
            alert()
        }
    }
});
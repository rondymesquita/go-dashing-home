(function () {
    var deferred = jQuery.Deferred();
    var promise = deferred.promise();

    window.switchWidget = Vue.component('switch-widget', {
        template: '#hello-world-template',
        props: ['name', 'service'],
        data: function () {
            return {
                deferred: deferred,
                promise: promise,
                state: false,
                disabled: false,
                response: "",
                message: {
                    SUCCESS: "Sucesso!",
                    FAIL: "Falha!"
                },
                messageTimeout: 5000,
                classes: {
                    HIGHLIGHT: ['grey', 'lighten-3', 'elevation-5']
                }
            }
        },
        beforeMount: function(){
            this.state = true;
            var self = this;
            // new ShellExecuter()
            //     .shell(this.service.shell_status)
            //     .execute()
            //     .done(function (data, text, xhr) {
            //         console.log("success");
            //         self.showResponseMessage(self.message.SUCCESS);
            //     }).fail(function (xhr, status, error) {
            //         console.log("fail", status, error);
            //         self.state = false;
            //         self.showResponseMessage(self.message.FAIL);
            //     });
            // var source = new EventSource('events');
            // source.addEventListener('open', function(e){
            //     console.log("Connection yay!!!", e)
            // });

            source.addEventListener('message', function(e){
                if(JSON.parse(e.data).id == "fulano"){
                    console.log("fulano: ", e);
                }

            });
        },
        mounted: function () {
            this.$data.deferred.resolve("switch mounted");
        },
        methods: {
            onData: function(){

            },
            onEnter: function(event){
                this.state = !this.state;
                this.onChange();
            },
            onChange: function (event) {
                var self = this;

                this.disabled = true;

                if (this.state) {
                    this.enable();
                } else {
                    this.disable();
                }

                this.disabled = false;
            },
            onFocus: function (event) {
              event.target.classList.add(...this.classes.HIGHLIGHT);
            },
            onBlur: function(event){
                event.target.classList.remove(...this.classes.HIGHLIGHT);
            },
            enable: function (sucess) {
                var self = this;
                new ShellExecuter()
                    .shell(this.service.shell_start)
                    .execute()
                    .done(function (data, text, xhr) {
                        console.log("success");
                        self.showResponseMessage(self.message.SUCCESS);
                    }).fail(function (xhr, status, error) {
                        console.log("fail", status, error);
                        self.state = false;
                        self.showResponseMessage(self.message.FAIL);
                    });

            },
            disable: function () {
                var self = this;
                new ShellExecuter()
                    .shell(this.service.shell_stop)
                    .execute()
                    .done(function (data, text, xhr) {
                        console.log("success");
                        self.showResponseMessage(self.message.SUCCESS);
                    }).fail(function (xhr, status, error) {
                        console.log("fail", status, error);
                        self.state = true;
                        self.showResponseMessage(self.message.FAIL);
                    });
            },
            showResponseMessage: function(response){
                var self = this;
                this.response = response;
                setTimeout(function(){
                    self.response = "";
                }, this.messageTimeout)
            }
        }
    });

})();
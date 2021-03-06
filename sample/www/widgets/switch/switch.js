(function () {

    window.switchWidget = Vue.component('switch-widget', {
        template: '#hello-world-template',
        props: ['id', 'service'],
        data: function () {
            return {
                state: false,
                disabled: false,
                response: "",
                message: {
                    SUCCESS: "Sucesso!",
                    FAIL: "Falha!"
                },
                messageTimeout: 1000,
                classes: {
                    HIGHLIGHT: ['white', 'lighten-4'],
                    HIGHLIGHT_LABEL: ['primary--text'],
                    HIGHLIGHT_SWITCH: ['primary--text']
                }
            }
        },
        beforeMount: function(){
            this.state = true;
            var self = this;

            vm.$on(self.id, function(data){
                if (data.error){
                    self.state = false;
                }else{
                    self.state = true;
                }
            });
        },
        methods: {
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
              event.target.getElementsByTagName('label')[0].classList.add(...this.classes.HIGHLIGHT_LABEL);
            },
            onBlur: function(event){
                event.target.classList.remove(...this.classes.HIGHLIGHT);
                event.target.getElementsByTagName('label')[0].classList.remove(...this.classes.HIGHLIGHT_LABEL);
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
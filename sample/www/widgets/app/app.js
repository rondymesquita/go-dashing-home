(function () {

    window.appWidget = Vue.component('app-widget', {
        template: '#app-template',
        props: ['app'],
        data: function () {
            return {
                classes: {
                    HIGHLIGHT: ['elevation-8']
                }
            }
        },
        methods: {
            onFocus: function (event) {
                event.target.classList.add(...this.classes.HIGHLIGHT);
            },
            onBlur: function(event){
                event.target.classList.remove(...this.classes.HIGHLIGHT);
            },
            open: function () {
                console.log("open", this.app.shell);
                new ShellExecuter()
                    .shell(this.app.shell)
                    .execute()
                    .done(function (data, text, xhr) {
                        console.log("success");
                    }).fail(function (xhr, status, error) {
                        console.log("fail", status, error);
                    });
            }
        }
    });

})();

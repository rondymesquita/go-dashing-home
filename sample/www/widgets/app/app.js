Vue.component('app-widget', {
    template: '#app-template',
    props:['app'],
    mounted: function(){
        console.log("app mounted")
        SpatialNavigation.init();
        SpatialNavigation.add({
            selector: '.data-navigable'
        });

        SpatialNavigation.makeFocusable();
        SpatialNavigation.focus();

        this.navigableElements = document.querySelectorAll(".data-navigable");

        this.blurAllNavigableElements = function(){
            this.navigableElements.forEach(function (element) {
                element.blur();
            });
        };

        this.handleMouseEnter = function (event) {
            SpatialNavigation.focus(event.target);
        };

        this.handleMouseLeave = function (event) {
            self.blurAllNavigableElements();
        };

        this.navigableElements.forEach(function (element) {
            element.addEventListener("mouseenter", self.handleMouseEnter);
            element.addEventListener("mouseleave", self.handleMouseLeave);
        });
    },
    methods:{
        open: function(){
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

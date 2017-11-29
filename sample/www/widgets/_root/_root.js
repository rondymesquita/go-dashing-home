Vue.component('root-widget', {
    template: '#root-template',
    beforeMount: function () {
        console.log("root beforeMount")
    },
    mounted: function () {
        var self = this;
        window.source = new EventSource('events');
        window.source.addEventListener('open', function (e) {
            console.log("Connection opened", e)
            self.configureSpatialNavigation();
            self.startMessageListener();
        });
        window.source.addEventListener('error', function (e) {
            console.log("Connection error");
            if (e.currentTarget.readyState == EventSource.CLOSED) {
                console.log("Connection closed");
            }
        });
        console.log("root mounted")

    },
    methods: {
        startMessageListener: function () {
            window.source.addEventListener('message', function (e) {
                data = JSON.parse(e.data);
                vm.$emit(data.id, data);
            });
        },
        configureSpatialNavigation: function () {
            SpatialNavigation.init();
            SpatialNavigation.add({
                selector: '.data-navigable'
            });

            SpatialNavigation.makeFocusable();
            SpatialNavigation.focus();

            var onMouseEnter = function (event) {
                SpatialNavigation.focus(event.target);
            };
            var onMouseLeave = function (event) {
                blurAllNavigableElements();
            };

            var blurAllNavigableElements = function () {
                var navigableElements = document.querySelectorAll(".data-navigable");
                for (var i = 0; i < navigableElements.length; i++) {
                    navigableElements[i].blur()
                }
            };

            var navigableElements = document.querySelectorAll(".data-navigable");

            for (var i = 0; i < navigableElements.length; i++) {
                navigableElements[i].addEventListener("mouseenter", onMouseEnter);
                navigableElements[i].addEventListener("mouseleave", onMouseLeave);
            }
        },

    }
});
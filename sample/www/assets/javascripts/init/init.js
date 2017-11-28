$(document).ready(function(){

    var widgets = ['_root','switch','services','app','apps'];
    widgets.forEach(function(widget){
        new WidgetHTMLLoader().load(widget).into("#templates");
    });

    window.vm = new Vue({
        el: '#app'
    });

    appPromise = appWidget.options.data().promise;
    switchPromise = switchWidget.options.data().promise;

    $.when(appPromise, switchPromise).done(function(data, data2){
        SpatialNavigation.init();
        SpatialNavigation.add({
            selector: '.data-navigable'
        });

        SpatialNavigation.makeFocusable();
        SpatialNavigation.focus();

        var onMouseEnter = function (event) {
            SpatialNavigation.focus(event.target);
        };
        var onMouseLeave = function(event){
            blurAllNavigableElements();
        };

        var blurAllNavigableElements = function(){
            var navigableElements = document.querySelectorAll(".data-navigable");
            for(var i =0; i < navigableElements.length; i++){
                navigableElements[i].blur()
            }
        };

        var navigableElements = document.querySelectorAll(".data-navigable");

        for(var i =0; i < navigableElements.length; i++){
            navigableElements[i].addEventListener("mouseenter", onMouseEnter);
            navigableElements[i].addEventListener("mouseleave", onMouseLeave);
        }
    })

});




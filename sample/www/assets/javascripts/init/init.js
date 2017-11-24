$(document).ready(function(){

    var widgets = ['_root','switch','services','app','apps'];
    widgets.forEach(function(widget){
        new WidgetHTMLLoader().load(widget).into("#templates");
    });

    Vue.mixin({
        mounted: function () {
            console.log("mixin mounted")
        }
    })


    var vm = new Vue({
        el: '#app',
        mounted: function(){
            console.log("vm mounted")
        },

    });

});




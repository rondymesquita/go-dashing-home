$(document).ready(function(){

    var widgets = ['_root','switch','services','app','apps'];
    widgets.forEach(function(widget){
        new WidgetHTMLLoader().load(widget).into("#templates");
    });

    window.vm = new Vue({
        el: '#app',
        created: function(){
            console.log("vm created");
        },
        mounted: function(){
            console.log("vm mounted");
        }
    });

});




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

    window.vm.$vuetify.theme = {
        primary: '#26a69a',
        secondary: '#424242',
        accent: '#26a69a',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    };


});




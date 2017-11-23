$(document).ready(function(){

    var widgets = ['switch','services','app','apps'];
    widgets.forEach(function(widget){
        new WidgetHTMLLoader().load(widget).into("#templates");
    });

    new Vue({
        el: '#app'
    });


});


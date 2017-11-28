Vue.component('root-widget', {
    template: '#root-template',
    beforeMount: function(){
        window.source = new EventSource('events');
        window.source.addEventListener('open', function(e){
            console.log("Connection yay!!!", e)
        });

    },
    mounted: function(){
        console.log("root mounted")
    }
});
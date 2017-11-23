Vue.component('switch-widget', {
    template: '#hello-world-template',
    props:['name'],
    mounted: function(){
        var selector = "input[name='"+this.name+"']";
        $(selector).bootstrapSwitch();
    },
    methods:{
        clickhere: function(){
            alert()
        }
    }
});
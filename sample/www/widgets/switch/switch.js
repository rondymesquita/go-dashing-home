Vue.component('switch-widget', {
    template: '#hello-world-template',
    props:['name','service'],
    mounted: function(){
        var selector = "input[name='"+this.name+"']";
        $(selector).bootstrapSwitch();
        $(selector).on('switchChange.bootstrapSwitch', this.onChange);
    },
    methods:{
        onChange: function(event, state){
            if(state){
                this.enable();
            }else{
                this.disable();
            }
        },
        enable: function(){

        },
        disable: function(){

        }
    }
});
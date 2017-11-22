class Dashing.Switch extends Dashing.Widget

    ready: ->
        $('.widget-switch .switch').bootstrapSwitch()
        console.log(@get('icon'))

    clickhere: ->
        console.log(@get('fulano'))
        console.log(@get('icon'))


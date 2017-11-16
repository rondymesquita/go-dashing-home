var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Dashing.Switch = (function(_super) {
  __extends(Switch, _super);

  function Switch() {
    httpClient = new HttpClient();
    return Switch.__super__.constructor.apply(this, arguments);
  }

  Switch.prototype.ready = function(e){
    // componentHandler.upgradeAllRegistered()
    // this.set('id', this.get('handler'))
  }

  Switch.prototype.onChange = function(node, e){
    if (e.type == 'change'){
      if(node.checked){

      }else{

      }
    }
  }

  Switch.prototype.onData = function(data){
    console.log(data)
  }

  return Switch;

})(Dashing.Widget);




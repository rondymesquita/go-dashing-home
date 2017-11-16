var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Dashing.Switches = (function(_super) {
  __extends(Switches, _super);

  function Switches() {
    return Switches.__super__.constructor.apply(this, arguments);
  }

  Switches.prototype.ready = function(e){
    // componentHandler.upgradeAllRegistered()
  }

  return Switches;

})(Dashing.Widget);




var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Dashing.Command = (function(_super) {
  __extends(Command, _super);

  function Command() {
    return Command.__super__.constructor.apply(this, arguments);
  }

  Command.prototype.sendrequest = function(){
    self = this

    request = $.ajax({
      url: "/command/exec",
      type: "POST",
      data: {commands: ['echo "====> hello"', 'firefox']},
      dataType: "json"
    });

    request.done(function(data){
      console.log(data)
      self.set('button', 'Fulano');
    });

    request.fail(function(data){
      console.log("fail")
      console.log(data)
    });
  }

  Command.prototype.ready = function() {
    name = this.get("name");
    this.set("src", "/assets/images/" + name + ".png")
  };

  return Command;

})(Dashing.Widget);

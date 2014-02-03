enyo.kind({
	name: "Bootplate.Application",
	kind: "enyo.Application",
	components: [{
		name: "message",
		kind: "Bootplate.MessageController"
	}, {
		name: "messages",
		kind: "Bootplate.MessagesController"
	}],
	view: "Bootplate.MainView",
	handlers: {
		onAddRecord: "handleAddRecord"
	},
	handleAddRecord: function (sender, event) {
		var data = this.$.message.get("data");
		this.$.messages.add({"message": data});
	},
	create: enyo.inherit(function(sup) {
		return function(){
			sup.apply(this, arguments);
			this.set("stockCollection",new stocks());
			var that = this;
			this.stockCollection.fetch({strategy: "merge",success:function(cc) {that.view.$.pie.set("data",that.stockCollection); }});
			
			// var t = this.stockCollection.raw();
			// "AskRealtime": "36.77",
                    // "BidRealtime": "35.50",
                    //  "BookValue": "12.587",
		};
	}),
});

enyo.kind({
	name: "Stocks.Application",
	kind: "enyo.Application",
	components: [
		{
			name: "stocks",
			kind: "stocks"
		}
	],
	view: "Stocks.MainView",
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

			this.$.stocks.fetch({strategy: "merge",success:enyo.bind(this,this.newDataArrived)});
		};
	}),
	newDataArrived : function(rec, opts, res) {
		this.view.$.pie.set("data",this.$.stocks);
	},
});

enyo.kind({
	name: "Stocks.MainView",
	kind: "FittableRows",
	fit: true,
	events: {
		// sent from view to indicate "Add Record" button hit
		onAddRecord: ""
	},
	bindings: [{
		from: ".app.$.message.data",
		to: ".$.input.value",
		kind: "enyo.InputBinding"
	}, {
		from: ".app.$.message.data",
		to: ".$.toolbar.content"
	}],
	components: [{
		name: "toolbar",
		kind: "onyx.Toolbar",
		content: "Stocks"
	}, {
		kind: "enyo.Scroller",
		fit: true,
		components: [
			{
				kind       : 'chert.d3.PieChart' ,
				id         : 'd3bar' ,
				name       : "pie",
				title      : "Bids in $",
				legendAlignment : "center",
				style      : "width : 480px; height: 300px;",
				dataConfig : {
					valuesAccessor      : function(d, i) {return d.values;},
					yAccessor           : function(d, i) {return d.high;},
					datasetNameAccessor : function(d, i) {return d.name;}
				}
			}
		]
	}, {
		kind: "onyx.Toolbar",
		components: [{
			kind: "onyx.Button",
			content: "Record Entry",
			ontap: "addRecord"
		}, {
			kind: "onyx.InputDecorator",
			components: [{
				name: "input",
				kind: "onyx.Input",
				placeholder: "Watch bindings work"
			}]
		}]
	}],
});

enyo.kind({
	name: "Bootplate.MainView",
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
		kind: "onyx.Toolbar"
	}, {
		kind: "enyo.Scroller",
		fit: true,
		components: [
			{
				kind       : 'chert.d3.PieChart' ,
				id         : 'd3bar' ,
				name       : "pie",
				yTitle     : "Stocks",
				style      : "width : 450px; height: 300px;",
				dataConfig : {
					valuesAccessor      : function(d, i) {return d.values;},
					yAccessor           : function(d, i) {return d.high;},
					// xAccessor           : function(d, i) {return d.abc;},
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
	}]
});
 enyo.kind({
	name: "Bootplate.MainView",
	kind: "FittableRows",
	fit: true,
	events: {
		// sent from view to indicate "Add Record" button hit
		onAddRecord: ""
	},
	components: [
		{
				kind       : 'chert.d3.PieChart' ,
				id         : 'd3bar' ,
				name       : "pie",
				yTitle     : "Stocks",
				style      : "width : 450px; height: 300px;",
				dataConfig : {
					valuesAccessor      : function(d, i) {return d.values;},
					yAccessor           : function(d, i) {return d.high;},
					// xAccessor           : function(d, i) {return d.abc;},
					datasetNameAccessor : function(d, i) {return d.name;}
				}
			}
	],

});

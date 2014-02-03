enyo.kind({
	name: "companyStock",
	kind: enyo.Model,
	mergeKeys:["symbol"],
	// this is a read-only example, and this flag means if _destroy_ is called on this
	// model it will only do the local routines
	// readOnly: true,
	parse: function (data) {
		// if (!this.get("sets")) {
		// 	data.sets = new enyo.Collection(data.dataset, {model:"aDatum", didFetch:true});
		// } else {
		// 	this.get("sets").merge(data.dataset,true);
		// }
		// delete data.dataset;
		return {symbol:data.symbol, name:data.Name,values:[{high:data.DaysHigh}]};
	}
});
enyo.kind({
	name: "stocks",
	kind: enyo.Collection,
	model: companyStock,

	// instanceAllRecords:true,
	// this is the url we want to use to request the data for the games but notice the `%.` that
	// we will use with _enyo.format_ to replace that with the current week
	// url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3DYHOO%2CGOOG%2CAAPL%26f%3Dsl1d1t1c1ohgv%26e%3D.csv'%20and%20columns%3D'symbol%2Cprice%2Cdate%2Ctime%2Cchange%2Ccol1%2Chigh%2Clow%2Ccol2'&format=json&callback=",
	url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22FB%22%2C%22HPQ%22%2C%22MSFT%22%2C%22TWTR%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",

	parse: function (data) {
		return data.query.results.quote;
	}
});
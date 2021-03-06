var args = arguments[0] || [];

$.root.top = args.top || 77;

var listView = null;
var data = [];
var category, offset, limit;
$.list = Alloy.createCollection("feed");
function dummy() {
    var v = Ti.UI.createListView();
}

var options = {
	listview : {
		top : 0,
		left : 0,
		right : 0,
		templates : {
			baseTemplate : Alloy.CFG.templates.baseTemplate,
			templateService: require('templates/serviceTemplate'),
		},
		defaultItemTemplate : 'baseTemplate',
		backgroundColor : '#efeff1',
		
		//allowsSelection: false
		
	},
	model: "feed",
	collection: $.list,
	clickFunc : function(e) {
		Ti.API.info('!!!!',e);
		var itemType = e.full_data.item_type
		var detailWindow = Alloy.createController("Downloader/DetailWindow",{data:e.full_data}).getView();
		Ti.App.tabGroup.activeTab.open(detailWindow, {animated:true});
	
	}
};
var listView = Alloy.createWidget('ip.advancedListView', 'widget', options);
$.root.add(listView.getView());



$.loadCategory = function(options) {
    listView.setParams(options);
    listView.reloadData();
}

$(function () {
$.ig.loader({
	        scriptPath: "http://dev.igniteui.local/17-1/IgniteUI/js/",
	        cssPath: "http://dev.igniteui.local/17-1/IgniteUI/css/",
	        resources: "igGrid.Sorting"
	    });

        // jQuery's ready event can be used with the loader.
        // The loader calls holdReady until all JS and CSS files are loaded.
	    $(function () {
	        $("#grid").igGrid({
	            autoGenerateColumns: false,
	            columns: [
					{ headerText: "ID", key: "ProductID", dataType: "number" },
					{ headerText: "Name", key: "Name", dataType: "string" },
					{ headerText: "Number", key: "ProductNumber", dataType: "string" },
					{ headerText: "Cost", key: "StandardCost", dataType: "number" }
	            ],
	            dataSource: adventureWorks,
	            height: "400px",
	            features: [
				{
				    name: "Sorting",
				    type: "local",
				    mode: "multiple"
				}
	            ]
	        });
	    });
});
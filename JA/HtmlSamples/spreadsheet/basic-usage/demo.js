$(function () {
$.ig.loader({
			scriptPath: "http://dev.igniteui.local/17-1/IgniteUI/js/",
			cssPath: "http://dev.igniteui.local/17-1/IgniteUI/css/",
			resources: "igSpreadsheet,igExcel.LoadSaveXlsx,igEditors"
		});
	 
			$(function () {
				$("#spreadsheet").igSpreadsheet({
					height: "600",
					width: "100%"
				});

				var workbook = null;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'http://jp.dev.igniteui.local/17-1/data-files/statistic.xlsx', true);
				xhr.responseType = 'arraybuffer';

				xhr.onload = function (e) {
					// response is unsigned 8 bit integer
					var responseArray = new Uint8Array(this.response);
					$.ig.excel.Workbook.load(responseArray, function () {
						workbook = arguments[0];
						$("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
					}, function () {
						console.log("fail");
					})
				};

				xhr.send();
			});
});
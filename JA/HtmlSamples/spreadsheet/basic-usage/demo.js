$(function () {
$.ig.loader({
			scriptPath: "http://dev.igniteui.local/17-1/IgniteUI/js/",
			cssPath: "http://dev.igniteui.local/17-1/IgniteUI/css/",
			resources: "igSpreadsheet,igExcel.LoadSaveXlsx,igEditors",
			ready: function () {
				$("#spreadsheet").igSpreadsheet({
					height: "600",
					width: "100%",
					activeWorksheetChanged(evt, ui) {
						if (ui.newActiveWorksheetName == "Statistics") {
							$("#spreadsheet").igSpreadsheet("option", "activeCell", "E7");
						} else {
							$("#spreadsheet").igSpreadsheet("option", "activeCell", "J15");
						}
					}
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
						setInitialSettings();
					}, function () {
						console.log("fail");
					})
				};
				xhr.send();

				function setInitialSettings() {
					$("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
					var ws = workbook.worksheets("Table data");
					$("#spreadsheet").igSpreadsheet("option", "activeWorksheet", ws);
					$("#spreadsheet").igSpreadsheet("option", "activeCell", "J15");
					$("#spreadsheet").igSpreadsheet("option", "zoomLevel", "95");
				}
			}
		});
});
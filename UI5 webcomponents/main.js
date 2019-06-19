import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/ShellBarItem";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/BusyIndicator";

window._count = 4;
window._url = "https://services.odata.org/V2/Northwind/Northwind.svc/Products({count})?$select=ProductName,QuantityPerUnit,UnitPrice,UnitsInStock&$format=json";

document.getElementById("refreshBtn").addEventListener("press", function (oEvent) {
    var table = document.getElementById("table");
    var busyIndicator = document.getElementById("busyIndicator");
    busyIndicator.active = true;

    //create a new table row to be added to the table
    var newRow = document.createElement("ui5-table-row");
    newRow.setAttribute("slot", "rows");

    var url = window._url.replace("{count}", window._count++);
    $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json",
        url: url,
        async: true,
        success: function (result) {
            //create cells to be added to the row created above
            var cell;
            cell = document.createElement("ui5-table-cell");
            cell.textContent = result.d.ProductName;
            newRow.appendChild(cell);
            cell = document.createElement("ui5-table-cell");
            cell.textContent = result.d.QuantityPerUnit;
            newRow.appendChild(cell);
            cell = document.createElement("ui5-table-cell");
            cell.textContent = "$" + (+result.d.UnitPrice).toFixed(2);
            newRow.appendChild(cell);
            cell = document.createElement("ui5-table-cell");
            cell.textContent = result.d.UnitsInStock;
            newRow.appendChild(cell);
            table.appendChild(newRow);
            busyIndicator.active = false;
        }.bind(this),
        error: function () {
            console.log("Something went wrong while fetching the data!");
        }
    });




}.bind(this));
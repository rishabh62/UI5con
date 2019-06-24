<template>
    <FdButton id="refBtn" styling="emphasized" icon="refresh" @click="onRefresh">Refresh</FdButton>
</template>

<script>
export default {
    data: {
        _count : 4,
        _url : "https://services.odata.org/V2/Northwind/Northwind.svc/Products({count})?$select=ProductName,QuantityPerUnit,UnitPrice,UnitsInStock&$format=json"

    },
    methods: {
        onRefresh: function(oEvent){
            console.log("hi")
    //         var url = this._url.replace("{count}", this._count++);
    // $.ajax({
    //     url: url,
    //     type: "GET",
    //     contentType: "application/json",
    //     url: url,
    //     async: true,
    //     success: function (result) {
    //         //create cells to be added to the row created above
    //         var cell;
    //         cell = document.createElement("ui5-table-cell");
    //         cell.textContent = result.d.ProductName;
    //         newRow.appendChild(cell);
    //         cell = document.createElement("ui5-table-cell");
    //         cell.textContent = result.d.QuantityPerUnit;
    //         newRow.appendChild(cell);
    //         cell = document.createElement("ui5-table-cell");
    //         cell.textContent = "$" + (+result.d.UnitPrice).toFixed(2);
    //         newRow.appendChild(cell);
    //         cell = document.createElement("ui5-table-cell");
    //         cell.textContent = result.d.UnitsInStock;
    //         newRow.appendChild(cell);
    //         table.appendChild(newRow);
    //         busyIndicator.active = false;
    //     }.bind(this),
    //     error: function () {
    //         console.log("Something went wrong while fetching the data!");
    //     }
    // });
        }
    }
}
</script>

<style scoped>
    #refBtn {
        margin: 1rem;
    }
</style>


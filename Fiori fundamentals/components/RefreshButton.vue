<template>
  <FdButton id="refBtn" styling="emphasized" icon="refresh" @click="onRefresh">Refresh</FdButton>
</template>

<script>
export default {
  data() {
    return {
      _count: 4,
      _url:
        "https://services.odata.org/V2/Northwind/Northwind.svc/Products({count})?$select=ProductName,QuantityPerUnit,UnitPrice,UnitsInStock&$format=json"
    };
  },
  methods: {
    onRefresh: function(oEvent) {
      console.log("hi");
      //debugger;
      var url = this.$data._url.replace("{count}", this.$data._count++);
      $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json",
        url: url,
        async: true,
        success: function(result) {
            result.d.UnitPrice = "$" + (+result.d.UnitPrice).toFixed(2);
            this.$parent.$children[1].items.push(result.d);
        }.bind(this),
        error: function() {
          console.log("Something went wrong while fetching the data!");
        }
      });
    }
  }
};
</script>

<style scoped>
#refBtn {
  margin: 1rem;
}
</style>


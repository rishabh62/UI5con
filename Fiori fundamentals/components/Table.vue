<template>
  <FdTable :headers="headers" :items="items">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell>{{ item.ProductName }}</FdTableCell>
        <FdTableCell>{{ item.QuantityPerUnit }}</FdTableCell>
        <FdTableCell>{{ item.UnitPrice }}</FdTableCell>
        <FdTableCell>{{ item.UnitsInStock }}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script>
export default {
  data: () => ({
    headers: [
      "Produce Name",
      "Quantity per unit",
      "Unit Price",
      "Units in stock"
    ],
    items: [
      {
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        UnitPrice: "18.0000",
        UnitsInStock: 39
      },
      {
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: "19.0000",
        UnitsInStock: 17
      },
      {
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        UnitPrice: "10.0000",
        UnitsInStock: 13
      }
    ]
  })
};
</script>

<style scoped>
</style>
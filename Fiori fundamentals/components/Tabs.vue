<template>
    <FdTabs v-model="activeTab">
      <FdTabItem label="Home" name="a">
        <RefreshButton @click="onRefresh"></RefreshButton>
        <div id="table">
        <Table ref="tableRef" ></Table>
        </div>
      </FdTabItem>

      <FdTabItem label="Settings" name="b">
        Settings go here ...
      </FdTabItem>

      <FdTabItem label="About" name="c">
        About section goes here ...
      </FdTabItem>
    </FdTabs>
</template>

<script>
import RefreshButton from './RefreshButton';
import Table from './Table';
export default {
    methods:{
        onRefresh: function(oEvent){
            console.log("RefreshButton.$data");
            debugger;
        }
    },
    data: () => ({ activeTab: "a" }),
    components: {
        RefreshButton,
        Table
    }
}
</script>

<style>
 #table {
     margin-left: 1rem;
     margin-right: 1rem;
 }
</style>




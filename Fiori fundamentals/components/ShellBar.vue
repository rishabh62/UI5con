    <template>
  <FdShellBar>
    <FdShellBarGroup position="start">
      <FdShellBarLogo
        alt="SAP"
        src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png"></FdShellBarLogo>
      <FdShellBarProduct>
        <FdShellBarProductMenu>
          <template #title>Menu</template>
          <template #default>
            <FdMenuList>
              <FdMenuItem @click="itemClicked('a')">Menu Item 1</FdMenuItem>
              <FdMenuItem>Menu Item 2</FdMenuItem>
            </FdMenuList>
          </template>
        </FdShellBarProductMenu>
      </FdShellBarProduct>
      <FdShellBarSubtitle style="font-size:1.2rem">Product Database</FdShellBarSubtitle>
    </FdShellBarGroup>
    <FdShellBarGroup position="end">
      <FdShellBarActions>
        <FdShellBarAction>
          <FdShellBarUserMenu ref="userMenu">
            <!-- <FdMenu>
              <FdMenuList>
                <FdMenuItem @click="closeUserMenu">Settings</FdMenuItem>
                <FdMenuItem @click="closeUserMenu">Sign out</FdMenuItem>
              </FdMenuList>
            </FdMenu> -->
          </FdShellBarUserMenu>
        </FdShellBarAction>
      </FdShellBarActions>
    </FdShellBarGroup>
    <FdShellBarGroup >
        <FdShellBarActions>
          <FdShellBarAction>
            <FdShellBarProductSwitcher>
              <FdShellBarProductSwitcherItem>

              </FdShellBarProductSwitcherItem>
            </FdShellBarProductSwitcher>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
  </FdShellBar>
</template>
    
<script>
export default {
  name: "App",
  methods: {
    itemClicked(item) {
      // eslint-disable-next-line no-console
      console.log("item clicked", item);
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

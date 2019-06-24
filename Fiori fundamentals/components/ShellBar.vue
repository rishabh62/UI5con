    <template>
  <FdShellBar>
    <FdShellBarGroup position="start">
      <FdShellBarLogo
        alt="SAP"
        src="https://unpkg.com/fiori-fundamentals@1.6.0/dist/images/sap-logo@2x.png"
        width="48"
        height="24"
      />
      <FdShellBarProduct productTitle="Product Name"/>
    </FdShellBarGroup>
    <FdShellBarGroup position="end">
      <FdShellBarActions>
        <FdShellBarAction>
          <FdShellBarUserMenu ref="userMenu">
            <FdMenu>
              <FdMenuList>
                <FdMenuItem @click="closeUserMenu">Settings</FdMenuItem>
                <FdMenuItem @click="closeUserMenu">Sign out</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </FdShellBarUserMenu>
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
    return {
      products: [
        {
          src: "images/products/01.png",
          title: "Fiori"
        },
        {
          src: "images/products/02.png",
          title: "S/4 HANA Cloud"
        },
        {
          src: "images/products/03.png",
          title: "Analytics Cloud"
        }
      ]
    };
  },
  computed: {}
};
</script>

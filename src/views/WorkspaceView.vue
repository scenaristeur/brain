<template>
  <div> WORK

    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <!-- <b-button-group class="mx-1">
          <b-button>&laquo;</b-button>
          <b-button>&lsaquo;</b-button>
        </b-button-group> -->
        <b-button-group class="mx-1">
          <b-button>subspaces</b-button>
          <b-button>bases</b-button>
          <b-button>tables</b-button>
          <b-button @click="getData">Get Data</b-button>
        </b-button-group>
        <!-- <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group> -->
      </b-button-toolbar>
    </div>

    <hr>



    {{ workspace }}



    <hr>
    {{ workspaces }}

  </div>
</template>

<script>
export default {
  name: "WorkspaceView",
  created() {
    this.workspace = this.$store.state.core.currentWorkspace

  },
  data() {
    return {};
  },
  props: {},
  methods: {
    async getData() {
      this.data = await this.$getData(this.workspace)
      console.log(this.data)
    }
  },
  computed: {
    workspaces() {
      return this.$store.state.core.workspaces
    }
  },
  workspace() {
    return this.$store.state.core.currentWorkspace;
  }
};
</script>

<style lang="scss" scoped></style>
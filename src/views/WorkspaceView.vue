<template>
  <div> WORK
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
  methods: {},
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
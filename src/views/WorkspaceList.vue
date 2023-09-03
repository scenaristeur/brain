<template>
  <div>
    <div v-if="brains == undefined">
      Please first create a Workspace, if it does not work, look for error message in the js console with Ctrl+Maj+I.
    </div>
    <b-list-group v-else>
      <b-list-group-item v-for="w in brains.brains" button :key="w.id" @click="workspaceRouter(w)"
        class="d-flex justify-content-between align-items-center">
        {{ w.name }}
        / {{ w.path }}

      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "WorkspaceList",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {
    workspaceRouter(w) {
      this.$store.commit('core/currentWorkspace', w)
      this.$router.push({
        name: 'workspace'
      })
    }
  },
  computed: {
    brains() {
      return this.$store.state.core.brains
    }
  }
};
</script>

<style scoped></style>
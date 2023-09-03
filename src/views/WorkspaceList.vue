<template>
  <b-list-group>
    <b-list-group-item v-for="w in workspaces"  button :key="w.id" @click="workspaceRouter(w)"  class="d-flex justify-content-between align-items-center">
      {{ w.name }}
     / {{ w.type }}, {{ w.url }}
    
    </b-list-group-item>

  </b-list-group>
</template>

<script>
export default {
  name: "WorkspaceList",
  created() {},
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
        workspaces() {
            return this.$store.state.core.workspaces
        }
    }
};
</script>

<style scoped></style>
<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <div>
            <b-dropdown id="dropdown-1" text="Workspaces" class="m-md-2">
              <b-dropdown-item v-for="w in workspaces" :key="w.name" @click="workspaceSelected(w)">{{ w.name }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col cols="6">B</b-col>

      </b-row>
    </b-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      workspaces: [
        { name: "Solid example", url: "https://spoggy-test2.solidcommunity.net/public/protocoleb_test/" },
        { name: "Ipfs example", url: "ipfs://QmPK9UToVFCHKAuGjxfLUKN37PGF7ZjQVa1t6dcY7yLpHi" },
        { name: "Google Drive example", url: "https://drive.google.com/drive/folders/1K9fATJFtXuJVZzjbgW6KwFvHPBADt4G4" }
      ]
    }
  },
  methods:{
    workspaceSelected(w){
      console.log(w.name, w.url)
    }
  }
}
</script>

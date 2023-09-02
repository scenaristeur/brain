<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col >
          <div>
            <b-dropdown id="dropdown-1" text="Workspaces" class="m-md-2">
              <b-dropdown-item v-for="w in workspaces" :key="w.name" @click="workspaceSelected(w)">{{ w.name }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col >
          <div>
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-button-group class="mx-1">
                <b-button>&laquo;</b-button>
                <b-button>&lsaquo;</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
                <b-button>Redo</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button>&rsaquo;</b-button>
                <b-button>&raquo;</b-button>
              </b-button-group>
            </b-button-toolbar>
          </div>

        </b-col>

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

<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <b-dropdown id="dropdown-1" text="Workspaces" class="m-md-2">
              <b-dropdown-item @click="workspaceCreate">New Workspace</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <!-- <b-dropdown-item v-for="w in workspaces" :key="w.name" @click="workspaceSelected(w)">{{ w.name
              }}</b-dropdown-item> -->

              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <!-- <b-button-group class="mx-1">
                <b-button>&laquo;</b-button>
                <b-button>&lsaquo;</b-button>
              </b-button-group> -->
              <b-button-group class="mx-1">
                <b-button>new already exists</b-button>
                <b-button>Undo</b-button>
                <b-button>Redo</b-button>
              </b-button-group>
              <!-- <b-button-group class="mx-1">
                <b-button>&rsaquo;</b-button>
                <b-button>&raquo;</b-button>
              </b-button-group> -->
            </b-button-toolbar>
          </div>

        </b-col>

      </b-row>
      <b-row v-if="nw != null">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Workspace name:" label-for="input-1"
            description="Enter the name of the new workspace you want to create.">
            <b-form-input id="input-1" v-model="nw.name" type="text" placeholder="Enter name" required></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-3" label="Type:" label-for="input-3">
            <b-form-select id="input-3" v-model="nw.type" :options="types" required @input="typeChanged"></b-form-select>
          </b-form-group> -->


          <!-- 
          <b-form-group id="input-group-2" label="Workspace location:" label-for="input-2" >
            <b-form-input id="input-2" v-model="nw.url" placeholder="Enter location" required></b-form-input>
          </b-form-group> -->

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

      </b-row>
    </b-container>


    session {{ session && session.webId }} , {{ pod && pod.photo }}
    <hr>
    <!-- brains: <div v-if="brains != undefined">{{ brains.brains }}</div> -->

    <WorkspaceList />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from '@/components/HelloWorld.vue'
import WorkspaceList from '@/views/WorkspaceList.vue'
import Workspace from '@/entities/workspace.js';



export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    WorkspaceList
  },
  data() {
    return {
      // workspaces_examples: [
      //   { name: "LocalStorage example", type: "localstorage" },
      //   { name: "Memory example", type: "memory" },
      //   { name: "Solid example", urls: ["https://spoggy-test2.solidcommunity.net/public/protocoleb_test/"], type: "solid" },
      //   { name: "Ipfs example", urls: ["ipfs://QmPK9UToVFCHKAuGjxfLUKN37PGF7ZjQVa1t6dcY7yLpHi"], type: "ipfs" },
      //   { name: "Google Drive example", urls: ["https://drive.google.com/drive/folders/1K9fATJFtXuJVZzjbgW6KwFvHPBADt4G4"], type: "gdrive" },
      // ],
      nw: null,
      // types: ["memory", "localstorage", "filesystem", "solid", "gdrive", "ipfs"],
    }
  },
  async created() {
    // for (let workspace of this.workspaces_examples) {
    //   let ws = new Workspace(workspace)
    //   await this.$store.commit('core/addWorkspace', ws)
    // }
  },
  methods: {
    updateDir(data) {
      console.log('up', data)
    },
    workspaceSelected(w) {
      console.log(w.name, w.url)
    },
    workspaceCreate() {
      this.nw = new Workspace()
      console.log(this.nw)
    },
    onSubmit() {
      console.log(this.nw)
      //this.$store.commit('core/addWorkspace', this.nw)
      this.$createWorkspace(this.nw)
      this.onReset()
    },
    onReset() {
      this.nw = null
    },
    typeChanged() {
      this.nw.type == "memory" ? this.nw.url = "" : ""
    }
  },
  computed: {
    session() {
      return this.$store.state.solid.session
    },
    pod() {
      return this.$store.state.solid.pod
    },
    brains() {
      return this.$store.state.core.brains
    }
  },
}
</script>

<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <b-dropdown id="dropdown-1" text="Workspaces" class="m-md-2">
              <b-dropdown-item @click="workspaceCreate">New Workspace</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item v-for="w in workspaces" :key="w.name" @click="workspaceSelected(w)">{{ w.name
              }}</b-dropdown-item>

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

          <b-form-group id="input-group-3" label="Type:" label-for="input-3">
            <b-form-select id="input-3" v-model="nw.type" :options="types" required @input="typeChanged"></b-form-select>
          </b-form-group>



          <b-form-group id="input-group-2" label="Workspace url:" label-for="input-2" v-if="nw.type != 'memory'">
            <b-form-input id="input-2" v-model="nw.url" placeholder="Enter url" required></b-form-input>
          </b-form-group>







          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

      </b-row>
    </b-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
import { initialize, FileSystem } from 'browserfs'
import { Buffer } from 'buffer'
import Workspace from '@/entities/workspace.js';



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
      ],
      nw: null,
      types: ["memory", "local", "solid", "google drive", "ipfs"],
      memfs: new FileSystem.InMemory(),
      localfs: new FileSystem.LocalStorage(),
      mfs: new FileSystem.MountableFileSystem(
        //        {
        //   '/tmp': { fs: "InMemory" },
        //   '/home': { fs: "IndexedDB" },
        //   '/mnt/usb0': { fs: "LocalStorage" }
        // }
      )
    }
  },
  async created() {
    console.log(FileSystem, initialize, Buffer)
    console.log("memfs", this.memfs)
    console.log('localstorage', this.localfs)
    console.log('mfs', this.mfs)
    initialize(this.mfs)
    this.mfs.mkdirSync('/test/')
    this.mfs.mkdirSync('/test/boop/');
    console.log(this.mfs.readdirSync('/test'))
    console.log(this.mfs.readdirSync('/'))
   // this.mfs.writeFile('/hello.txt', 'hello', null, null, 1, function(d){console.log("cb", d)})
    //console.log(this.mfs.writeFileSync())
    // let res = await this.mfs.writeFileSync('/test.txt', 'Cool, I can do this in the browser!',"utf-8", 'w')
    // console.log(res)
    // doc http://jvilk.com/browserfs/1.4.1/classes/_backend_mountablefilesystem_.mountablefilesystem.html#writefilesync
//     this.mfs.writeFileSync('/test.txt', 'Cool, I can do this in the browser!'/*, "utf-8",*/,/* "w", 2,*/,  function(err) {
// if (err != null) console.log(err)
//   // this.fs.readFile('/test.txt', function(err, contents) {
//   //   console.log(contents.toString(), err);
//   // });
// });
    console.log(this.mfs.readdirSync('/'))
    // console.log(this.mfs.readdirSync('/home'))


    //  var fs = this.fs //require('fs');
    //  let write =  fs.writeFile('/test.txt', 'Cool, I can do this in the browser!')
    //  console.log(write)
    // this.fs.createFolder(this.fs.root, 'data', true, true);
    // this.fs.mount(this.fs, {root: '/'}, '/data');
  },
  methods: {
    updateDir(data) {
      console.log('up', data)
    },
    workspaceSelected(w) {
      console.log(w.name, w.url)
    },
    workspaceCreate() {
      let ws = new Workspace()
      console.log("Workspace", ws)
      ws.test()
      this.nw = 
      console.log(this.nw)
    },
    onSubmit() {
      console.log(this.nw)
      this.onReset()
    },
    onReset() {
      this.nw = null
    },
    typeChanged() {
      this.nw.type == "memory" ? this.nw.url = "" : ""
    }
  }
}
</script>

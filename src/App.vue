<template>
  <div id="app">
    <div id="header"></div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/Frontend/view/pages/Login.vue";

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {}
</script>

<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 80vh;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /*
  flex-flow: column;
  display: flex;
  align-items: center;
  justify-content: center;
  */
}

#header {
  height: 10vh;
  background: #42b983;
}

</style>

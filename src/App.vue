<template>
  <div id="app">
    <div id="header"></div>
    <div id="main">
      <Login class="login"></Login>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/view/pages/Login.vue";

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #96a3b1;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

#header {
  height: 60px;
  background: #42b983;
}
</style>

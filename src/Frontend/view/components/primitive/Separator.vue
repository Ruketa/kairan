<template>
  <div>
    <hr class="separater" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Separator extends Vue {}
</script>

<style scoped>
.separater {
  border: 0;
  border-top: 1px solid;
  color: #42b983;
}
</style>

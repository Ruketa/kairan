<template>
  <div>
    <h3 class="card-title">
      <slot></slot>
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardTitle extends Vue {
}
</script>

<style scoped>
.card-title{
  margin: 0px;
}
</style>
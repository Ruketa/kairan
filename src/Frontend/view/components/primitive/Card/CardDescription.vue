<template>
  <div>
    <p class="description">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardDescription extends Vue {
}
</script>

<style scoped>
.description{
  margin: 0px;
}
</style>
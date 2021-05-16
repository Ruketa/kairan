<template>
  <div>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
}
</script>

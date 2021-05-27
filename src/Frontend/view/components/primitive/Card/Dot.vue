<template>
  <div>
    <div
      class="mark"
      v-bind:style="{
        background: color,
        width: size + 'px',
        height: size + 'px',
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Dot extends Vue {
  @Prop() color!: string;
  @Prop() size!: number;
}
</script>

<style scoped>
.mark {
  border-radius: 50%;
}
</style>

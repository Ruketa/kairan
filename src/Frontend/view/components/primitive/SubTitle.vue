<template>
  <div>
    <h2 class="sub-title" @click="OnClick">
      {{ label }}
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class SubTitle extends Vue {
  @Prop() private label!: string;

  @Emit("click")
  OnClick(): void {
    return;
  }
}
</script>

<style scoped></style>

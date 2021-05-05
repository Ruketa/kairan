<template>
  <div>
    <a @mousedown="OnMouseDown" @mouseup="OnMouseUp" @click="OnClick">{{
      label
    }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Label extends Vue {
  @Prop() label!: string;

  @Emit("click")
  OnClick(): void {
    return;
  }

  @Emit("mousedown")
  OnMouseDown(): void {
    return;
  }

  @Emit("mouseup")
  OnMouseUp(): void {
    return;
  }
}
</script>

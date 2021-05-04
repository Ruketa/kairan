<template>
  <div>
    <a
      @mousedown="OnMouseDown"
      @mouseup="OnMouseUp"
      @click="OnClick"
      >{{ label }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Label extends Vue {

  @Prop() label !: string; 

  @Emit("click")
  OnClick(){return}

  @Emit("mousedown")
  OnMouseDown(){return}

  @Emit("mouseup")
  OnMouseUp(){return}
}
</script>

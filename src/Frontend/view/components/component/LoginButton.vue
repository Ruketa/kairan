<template>
  <div>
    <Label
      v-bind:class="{
        'base released': !clicked,
        'base pushed': clicked,
      }"
      @mousedown="OnMouseDown"
      @mouseup="OnMouseUp"
      @click="OnClick"
      :label="label"
    ></Label>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Label from "@/Frontend/view/components/primitive/Label.vue";

@Component({
  components: {
    Label: Label,
  },
})
export default class LoginButton extends Vue {
  @Prop() label!: string;

  private clicked = false;

  @Emit("mousedown")
  OnMouseDown(): void {
    this.clicked = true;
  }

  @Emit("mouseup")
  OnMouseUp(): void {
    this.clicked = false;
  }

  @Emit("click")
  OnClick(): void {
    return;
  }
}
</script>

<style scoped>
.base {
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 0.5rem 3rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  border-radius: 100vh;
}

.released {
  background: #42b983;
  color: #fcfcfc;
  border-bottom: 5px solid #32a973;
}

.pushed {
  background: #42b983;
  color: #666666;
  border-bottom: 5px solid transparent;
}
</style>

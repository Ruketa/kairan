<template>
  <div>
    <img :src="this.loadImage()"
      v-bind:style=
      "{
        width: size + 'px',
        height: size + 'px',
        'border-radius': '50%'
      }"
     />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop() source!: string;
  @Prop() size!: number;

  private loadImage(): any{
    return require("@/assets/" + this.source)
  }
}
</script>

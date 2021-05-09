<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class IconButton extends Vue {
  @Prop() src!: string;
  @Prop() label!: string;
}
</script>

<template>
  <div>
    <a>{{ label }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Label extends Vue {
  @Prop() label!: string;
}
</script>

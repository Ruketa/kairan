<template>
  <div>
    <h1>{{ label }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  @Prop() private label!: string;
}
</script>

<template>
  <div>
    <h2 class="sub-title">{{ label }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SubTitle extends Vue {
  @Prop() private label!: string;
}
</script>

<style scoped>
.sub-title {
  color: #42b983;
}
</style>

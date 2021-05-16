<template>
  <div>
    <select name="regions">
      <option hidden value="">選択してください</option>
      <option v-for="region in regions" :key="region.id" :value="region.id">
        {{ inhabitant.region_name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Region } from "@/Frontend/Domain/Region";

@Component
export default class HelloWorld extends Vue {
  @Prop() regions!: Array<Region>;
}
</script>

<style scoped>
.select {
  overflow: hidden;
  width: 90%;
  margin: 2em auto;
  text-align: center;
}
</style>

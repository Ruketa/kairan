<template>
  <div>
    <input
      type="text"
      v-model="username_value"
      :placeholder="placeholder"
      class="username"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Username extends Vue {
  @Prop() placeholder!: string;
  @Prop() username!: string;

  get username_value(): string {
    return this.username;
  }

  set username_value(name: string) {
    this.$emit("change", name);
  }
}
</script>

<style scoped>
.username {
  margin: 10px auto;
  width: 400px;
  padding: 20px;
  border: 1px solid #acacac;
}
</style>

<template>
  <div>
    <input
      type="password"
      class="password"
      v-model="password_value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Password extends Vue {
  @Prop() placeholder!: string;
  @Prop() password!: string;

  get password_value(): string {
    return this.password;
  }

  set password_value(value: string) {
    this.$emit("change", value);
  }
}
</script>

<style scoped>
.password {
  margin: 10px auto;
  width: 400px;
  padding: 20px;
  border: 1px solid #acacac;
}
</style>

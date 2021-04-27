<template>
  <div>
    <h1>{{ title }}</h1>
    <Label label="my label" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

import Label from "@/view/components/primitive/Label.vue";

import { Region } from "@/Domain/Region"

@Component({
  components: {
    Label: Label,
  },
})
export default class Login extends Vue {
  @Prop() title!: string;



}
</script>

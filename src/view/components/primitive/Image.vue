<template>
  <div>
    <img :src="source" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component
export default class Image extends Vue{

  @Prop() source !: string
  
}
</script>
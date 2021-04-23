<template>
  <div>
    <a>{{msg}}</a>
  </div>
</template>

<script lang="ts">
@Component
export default class Label extends Vue{
  private msg !: string;
}
</script>
<template>
  <div class="card-item">
    <div class="image-item">
      <Icon :source="icon_src" size="60"></Icon>
    </div>
    <div class="disc-item">
      <CardTitle>{{ title }}</CardTitle>
      <Separator></Separator>
      <CardDescription>
        {{ description }}
      </CardDescription>
    </div>
    <div class="option-item">
      <Dot size="20" color="#00FF00"></Dot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CardTitle from "@/Frontend/view/components/primitive/Card/CardTitle.vue";
import CardDescription from "@/Frontend/view/components/primitive/Card/CardDescription.vue";
import Dot from "@/Frontend/view/components/primitive/Card/Dot.vue";
import Icon from "@/Frontend/view/components/primitive/Icon.vue";
import Separator from "@/Frontend/view/components/primitive/Separator.vue";

@Component({
  components: {
    Separator,
    CardTitle,
    CardDescription,
    Dot,
    Icon,
  },
})
export default class Card extends Vue {
  @Prop() icon_src!: string;
  @Prop() title!: string;
  @Prop() description!: string;
  @Prop() role!: number;
}
</script>

<style scoped>
.card-item {
  display: flex;
  background: white;
  color: #2c3e50;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  height: 150px;
  border-radius: 5px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 10px;
}

.disc-item {
  width: 75%;
  padding: 10px;
}

.option-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
}
</style>

<template>
  <div>
    <div class="card" v-for="(value, key) in card_data" :key="key">
      <div class="kairan-list">
        <div class="kairan-icon">
          <Icon v-if="value.has_board" source="kairan.jpg" size="50"></Icon>
          <Icon v-else source="check.png" size="50"></Icon>
        </div>
        <div class="card-item">
          <Card
            :title="value.title"
            :description="value.description"
            :icon_src="value.icon_src"
          >
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/Frontend/view/components/component/Card.vue";
import Icon from "@/Frontend/view/components/primitive/Icon.vue";

@Component({
  components: {
    Card,
    Icon,
  },
})
export default class Main extends Vue {
  @Prop() card_data!: [
    {
      title: string;
      description: string;
      icon_src: string;
      has_board: boolean;
    }
  ];
}
</script>

<style scoped>
.card {
  margin-top: 20px;
}

.kairan-list {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
}

.kairan-icon {
  grid-row: 1/2;
  grid-column: 1/2;
}

.card-item {
  grid-row: 1/2;
  grid-column: 2/3;
}
</style>

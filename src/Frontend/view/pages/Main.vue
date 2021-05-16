<template>
  <div class="main">
    <div class="side-contents"></div>
    <div class="center-contents">
      <Title>回覧状況</Title>
      <CardList :card_data="this.family_cards"></CardList>
    </div>
    <div class="side-contents"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FamilyController } from "@/Frontend/Adapter/controller/FamilyController";
import { Family } from "@/Frontend/Domain/Family";
import Title from "@/Frontend/view/components/primitive/Title.vue";
import CardList from "@/Frontend/view/components/assembly/CardList.vue";

@Component({
  components: {
    Title,
    CardList,
  },
})
export default class Main extends Vue {
  private family_cards = Array<{
    title: string;
    description: string;
    icon_src: string;
    has_board: boolean;
  }>();

  created(): void {
    const controller = new FamilyController();
    controller
      .fetchFamiliesData()
      .then((families: Family[]) => {
        console.log("get family data");
        families.forEach((family: Family) => {
          this.family_cards.push({
            title: family.family_name,
            description: family.description,
            icon_src: family.icon_url,
            has_board: true,
          });
        });
        console.log(this.family_cards);
      })
      .catch((err: any) => {
        console.log("catch error at created method");
      });
  }
}
</script>

<style scoped>
.main {
  align-items: top;
  justify-content: center;
  display: flex;
  background: #f5f5f5;
  height: 100vh;
}

.center-contents {
  width: 60%;
}

.side-contents {
  width: 20%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

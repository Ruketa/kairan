<template>
  <div class="main">
    <div class="side-contents"></div>
    <div class="center-contents">
      <Title>回覧状況</Title>
      <CardList :card_data="card_data"></CardList>
    </div>
    <div class="side-contents"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { InhabitantController } from "@/Frontend/Adapter/controller/InhabitantController";
import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import Title from "@/Frontend/view/components/primitive/Title.vue";
import CardList from "@/Frontend/view/components/assembly/CardList.vue";

@Component({
  components: {
    Title,
    CardList,
  },
})
export default class Main extends Vue {
  private list_contents!: Array<Inhabitant>;
  private card_data = [
    {
      title: "Title1",
      description: "description1",
      icon_src: "dog.jpg",
      has_board: true,
    },
    {
      title: "Title2",
      description: "description2",
      icon_src: "logo.png",
      has_board: false,
    },
  ];

  created(): void {
    let controller = new InhabitantController();
    this.list_contents = controller.findAllInhabitans();
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

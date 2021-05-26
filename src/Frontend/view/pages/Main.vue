<template>
  <div class="main">
    <div class="side-contents">
    </div>
    <div class="center-contents">
      <Title>住民リスト</Title>
      <Card
        title="Title"
        description="description"
        icon_src="dog.jpg"
      ></Card>
    </div>
    <div class="side-contents">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InhabitantController } from "@/Frontend/Adapter/controller/InhabitantController";
import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import { Region } from "@/Frontend/Domain/Region";
import Title from "@/Frontend/view/components/primitive/Title.vue";
import Card from "@/Frontend/view/components/component/Card.vue";

@Component({
  components: {
    Title,
    Card,
  },
})
export default class Main extends Vue {
  @Prop() private msg!: string;

  private list_contents!: Array<Inhabitant>;
  private regions!: Array<Region>;
  private show = true;

  created(): void {
    let controller = new InhabitantController();
    this.list_contents = controller.findAllInhabitans();
  }
}
</script>

<style scoped>

.main{
  align-items: top;
  justify-content: center;
  display: flex;
  background: #F5F5F5;
  height: 100vh;
}

.center-contents{
  width: 60%;
}

.side-contents{
  width: 20%;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>

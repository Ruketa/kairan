<template>
  <div class="main">
    <div class="side-contents">
    </div>
    <div class="center-contents">
      <Title>住民リスト</Title>
      <div class="items">
        <div class="image-item">
          <img src="@/assets/logo.png" width="40" height="40"/>
        </div>
        <div class="disc-item">center</div>
        <div class="option-item">right</div>
      </div>
      <!--
      <div class="list-item" >
        <div class="item">
          <img src="@/assets/logo.png" width="40" height="40"/>
          <p>image</p>
        </div>
        <div class="container item">
          <p>title</p>
          <p>descriptions</p>
        </div>
      <div class="item">option</div>
      </div>
      -->
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

@Component({
  components: {
    Title,
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
  align-items: center;
  justify-content: center;
  display: flex;
}

.list-item{
  display: flex;
  margin: 0;
}

.list-item{
  width: auto;
}

.items{
  display: flex;
}

.image-item{
  width: 30%;
  background: blue;
}

.disc-item{
  width: 60%;
  background: red;
}

.option-item{
  width: 10%;
  background: green;
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

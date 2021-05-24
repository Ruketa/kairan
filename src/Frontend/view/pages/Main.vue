<template>
  <div class="main">
    <div class="side-contents">
    </div>
    <div class="center-contents">
      <Title>住民リスト</Title>
      <div class="card-item">
        <div class="image-item">
          <img src="@/assets/dog.jpg" class="icon-image"/>
        </div>
        <div class="disc-item">
          <h3 class="disc-title">
            kurihara
          </h3>
          <Separator></Separator>
          <p>
            I am kurihara <br>
            こんにちは
          </p>
        </div>
        <div class="option-item">
          <div class="option-contents">
          </div>
        </div>
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
import Separator from "@/Frontend/view/components/primitive/Separator.vue";

@Component({
  components: {
    Title,
    Separator,
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

.card-item{
  display: flex;
  background: white;
  color: #2c3e50;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  height: 150px;
}

.image-item{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 10px;
}

.icon-image{
  width: 60px;
  height: 60px;
  Border-radius: 50%;
}

.disc-item{
  width: 75%;
  padding: 10px;
}

.disc-title{
  margin: 0px;
}

.option-item{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 10%;
}

.option-contents{
  width: 20px;
  height: 20px;
  Border-radius: 50%;
  background: violet;
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

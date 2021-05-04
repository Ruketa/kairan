<template>
  <div class="hello">
    <Title :title="msg"></Title>
    <div><RegionList></RegionList></div>
    <div>
      <ul>
        <li v-for="val in list_contents" :key="val.family_name">
          {{ val.family_name }}
        </li>
      </ul>
    </div>
    <div>
      <div id="list">
        <div style="background: gray">
          <img src="@/assets/logo.png" />
          image
        </div>
        <div class="container">
          <p>title</p>
          <p>descriptions</p>
        </div>
        <div style="background: blue">option</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InhabitantController } from "@/Frontend/Adapter/controller/InhabitantController";
import { Inhabitant } from "@/Frontend/Domain/Inhabitant";
import { Region } from "@/Frontend/Domain/Region";
import Title from "@/Frontend/view/components/primitive/Title.vue";
import RegionList from "@/Frontend/view/components/composite/RegionList.vue";

@Component({
  components: {
    Title,
    RegionList,
  },
})
export default class Main extends Vue {
  @Prop() private msg!: string;

  private list_contents!: Array<Inhabitant>;
  private regions!: Array<Region>;

  created(): void {
    let controller = new InhabitantController();
    this.list_contents = controller.findAllInhabitans();
  }
}
</script>

<style scoped>
#list {
  display: flex;
}
.container {
  background: bisque;
  padding: 2px 16px;
}
</style>

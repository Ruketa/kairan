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
      <div id="card">
        <div class="container">
          card component
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InhabitantController } from "@/Adapter/controller/InhabitantController";
import { Inhabitant } from "@/Domain/Inhabitant";
import { Region } from "@/Domain/Region";
import Title from "@/view/components/primitive/Title.vue";
import RegionList from "@/view/components/composite/RegionList.vue";

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

#card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
#card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container{
  padding: 2px 16px
}
</style>
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
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private list_contents!: Array<Inhabitant>;
  private regions!: Array<Region>

  created(): void {
    let controller = new InhabitantController();
    this.list_contents = controller.findAllInhabitans();
  }
}
</script>

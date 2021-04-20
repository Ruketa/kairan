<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="val in list_contents" :key="val.family_name">
          {{val.family_name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InhabitantController } from "@/Adapter/controller/InhabitantController";
import { Inhabitant } from "@/Domain/Inhabitant";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private list_contents !: Array<Inhabitant>;

  created() {
    let controller = new InhabitantController();
    this.list_contents = controller.findAllInhabitans()
  }
}
</script>

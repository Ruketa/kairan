<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//import { Region } from "@/Domain/Region";

@Component
export default class HelloWorld extends Vue {
  //  @Prop() private inhabitant_list!: Array<Region>;
  private items = [
    {title: "Item 1"},
    {title: "Item 2"},
    {title: "Item 3"},
    {title: "Item 4"},
  ]
}
</script>

<template>
  <div>
    <div>
      <Username
        placeholder="User name"
        :username="username"
        @change="ChangeUsername"
      />
    </div>
    <div>
      <Password
        placeholder="Password"
        :password="password"
        @change="ChangePassword"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SubTitle from "@/Frontend/view/components/primitive/SubTitle.vue";
import Username from "@/Frontend/view/components/primitive/input/Username.vue";
import Password from "@/Frontend/view/components/primitive/input/Password.vue";

@Component({
  components: {
    SubTitle: SubTitle,
    Username: Username,
    Password: Password,
  },
})
export default class LoginItem extends Vue {
  @Prop() username!: string;
  @Prop() password!: string;

  ChangePassword(pass: string): void {
    this.$emit("change-password", pass);
  }

  ChangeUsername(name: string): void {
    this.$emit("change-username", name);
  }
}
</script>

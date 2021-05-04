<template>
  <div>
    <div>
      <SubTitle label="Login" />
    </div>
    <div>
      <LoginItem
        :username="username"
        :password="password"
        @change-password="ChangePassword"
        @change-username="ChangeUsername"
     />
    </div>
    <div>
      <LoginButton 
        class="login-btn" 
        label="login"
        @click="OnSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Emit, Component } from "vue-property-decorator";
import SubTitle from "@/view/components/primitive/SubTitle.vue";
import LoginItem from "@/view/components/component/LoginItem.vue";
import LoginButton from "@/view/components/component/LoginButton.vue";

@Component({
  components: {
    SubTitle: SubTitle,
    LoginItem: LoginItem,
    LoginButton: LoginButton,
  },
})
export default class LoginForm extends Vue {
  private password = "";
  private username = "" ;

  @Emit("change-password")
  ChangePassword(pass: string): void {
    return
  }

  @Emit("change-username")
  ChangeUsername(name: string): void {
    return
  }

  @Emit("submit")
  OnSubmit(){return}
}
</script>

<style scoped>
.login-btn {
  margin: 10px auto;
  padding: 10px;
}
</style>

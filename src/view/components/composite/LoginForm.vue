<template>
  <div>
    <div style="display: flex">
      <SubTitle 
        :class="{'sign-in-title disable-title': !isSigin, 'sign-in-title': isSigin}" 
        label="Sign in" 
        @click="OnClick"/>
      <SubTitle 
        :class="{'sign-up-title disable-title': isSigin, 'sign-up-title': !isSigin}" 
        label="Sign up" 
        @click="OnClick"/>
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
      <span
        :class="{
          'message hidden': !visibleMessage,
          'message visible': visibleMessage,
        }"
        >アカウント名、パスワードが正しくありません。入力し直してください。</span
      >
    </div>
    <div>
      <LoginButton class="login-btn" label="Sign in" @click="OnSubmit" />
      <LoginButton class="login-btn" label="Sign up" @click="OnSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Emit, Component } from "vue-property-decorator";
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
  @Prop() visibleMessage!: boolean;

  private password = "";
  private username = "";
  private isSigin = true;

  @Emit("change-password")
  ChangePassword(): void {
    return;
  }

  @Emit("change-username")
  ChangeUsername(): void {
    return;
  }

  @Emit("submit")
  OnSubmit(): void {
    return;
  }

  OnClick():void{
    this.isSigin = !this.isSigin
    return
  }
}
</script>

<style scoped>
.login-btn {
  padding: 10px;
}
.message {
  visibility: visible;
  color: red;
}
.hidden {
  visibility: hidden;
}
.visible {
  visibility: visible;
}

.disable-title{
  color: #96a3b1;
}

.sign-in-title{
  margin-right:10px;
}

.sign-up-title{
  margin-left:10px;
}
</style>

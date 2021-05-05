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
      <span
        :class="{
          'message hidden': !visibleMessage,
          'message visible': visibleMessage,
        }"
        >アカウント名、パスワードが正しくありません。入力し直してください。</span
      >
    </div>
    <div>
      <LoginButton class="login-btn" label="login" @click="OnSubmit" />
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
</style>

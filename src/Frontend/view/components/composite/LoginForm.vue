<template>
  <div>
    <div style="display: flex">
      <SubTitle
        :class="{
          'subtitle title-disable': !isSigin,
          'subtitle title-enable': isSigin,
        }"
        label="Sign in"
        @click="OnClick"
      />
      <SubTitle
        :class="{
          'subtitle title-disable': isSigin,
          'subtitle title-enable': !isSigin,
        }"
        label="Sign up"
        @click="OnClick"
      />
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
      <LoginButton
        v-if="isSigin"
        class="auth-btn"
        label="Sign in"
        @click="OnSubmit"
      />
      <LoginButton v-else class="auth-btn" label="Sign up" @click="OnSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Emit, Component } from "vue-property-decorator";
import SubTitle from "@/Frontend/view/components/primitive/SubTitle.vue";
import LoginItem from "@/Frontend/view/components/component/LoginItem.vue";
import LoginButton from "@/Frontend/view/components/component/LoginButton.vue";

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

  OnClick(): void {
    this.isSigin = !this.isSigin;
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

.title-disable {
  color: #96a3b1;
}

.title-enable {
  color: #42b983;
}

.subtitle {
  margin-right: 10px;
}

.hidden {
  visibility: collapse;
}
</style>

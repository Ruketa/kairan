<template>
  <div>
    <div>
      <Title>Welcome</Title>
    </div>
    <div>
      <Separator />
    </div>
    <div>
      <LoginForm
        :visibleMessage="visibleMessage"
        @change-password="ChangePassword"
        @change-username="ChangeUsername"
        @submit="Authorize"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Title from "@/Frontend/view/components/primitive/Title.vue";
import Separator from "@/Frontend/view/components/primitive/Separator.vue";
import LoginForm from "@/Frontend/view/components/assembly/LoginForm.vue";

import { AuthorizeController } from "@/Frontend/Adapter/controller/AuthorizeController";

@Component({
  components: {
    Title: Title,
    Separator: Separator,
    LoginForm: LoginForm,
  },
})
export default class Login extends Vue {
  private username!: string;
  private password!: string;
  private visibleMessage = false;

  ChangePassword(pass: string): void {
    this.password = pass;
    this.visibleMessage = false;
  }

  ChangeUsername(name: string): void {
    this.username = name;
    this.visibleMessage = false;
  }

  Authorize(): void {
    let controller = new AuthorizeController();
    controller.Authorize(this.username, this.password).then((res: boolean) => {
      if (!res) {
        this.visibleMessage = true;
      } else {
        this.$store.commit("authorize");
        this.$router.push("main");
      }
    });
  }
}
</script>

<style scoped>
.login-btn {
  margin: 10px auto;
  padding: 10px;
}
</style>

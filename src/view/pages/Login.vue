<template>
  <div>
    <div>
      <Title label="Welcome" />
    </div>
    <div>
      <Separator />
    </div>
    <div>
      <LoginForm 
        @change-password="ChangePassword"
        @change-username="ChangeUsername"
        @submit="Authorize" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Title from "@/view/components/primitive/Title.vue";
import Separator from "@/view/components/primitive/Separator.vue";
import LoginForm from "@/view/components/composite/LoginForm.vue";

import { AuthorizeController } from "@/Adapter/controller/AuthorizeController";

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

  ChangePassword(pass: string): void {
    this.password = pass
  }

  ChangeUsername(name: string): void {
    this.username = name
  }

  Authorize() {
    let controller = new AuthorizeController();
    let result = controller.Authorize(this.username, this.password);
    console.log(result);
  }
}
</script>

<style scoped>
.login-btn {
  margin: 10px auto;
  padding: 10px;
}
</style>

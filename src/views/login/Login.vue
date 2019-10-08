<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form";
// import LoginForm from "_c/login-form";
import { mapActions } from "vuex";
import GlobalEventEmitter from "@/global/GlobalEventEmitter";
import GlobalEvent from "@/global/GlobalEvent";
export default {
  components: {
    LoginForm
  },
  methods: {
    //将登录模块的方法映射到当前对象上
    ...mapActions("login", ["handleLogin", "getUserInfo"]),

    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then(res0 => {
        // this.getUserInfo().then(res1 => {
        //   this.$router.push({
        //     name: this.$config.login
        //   });
        // });
      });
    }
  }
};
</script>
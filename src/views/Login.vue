<template>
  <div class="login-container">

    <el-form class="login-form" :model="loginForm" ref="loginForm">

      <h2>欢迎登录</h2>

      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输密码" @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button type="primary" class="login-btn" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>

    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!value.length < 6) {
          callback(new Error('Please enter the correct user name'));
        } else {
          callback();
        }
      };

      const validatePassword = (rule, value, callback) => {
        if (!value.length < 6) {
          callback(new Error('请输入6位密码'));
        } else {
          callback();
        }
      };

      return {
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        loginRules: {
          username: [
            { required: true, trigger: 'blur', validator: validateUsername }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePassword }
          ]
        },
        loading: false
      };
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          console.log(valid);
          if (valid) {
            this.loading = true;

            this.$store
              .dispatch('LoginByUserName', this.loginForm)
              .then(() => {
                this.loading = false;
                this.$router.push({ path: '/' });
              })
              .catch(() => {
                this.loading = false;
              });
          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .login-container
    height 100%
    width 100%
    .login-form
      center()
      padding 50px
      width 520px
      h2
        margin-bottom 20px
        text-align center
      .login-btn
        width 100%
        >>> span
          color #fff
</style>

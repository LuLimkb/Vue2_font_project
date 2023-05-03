<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <form action="">
      <div class="register">
        <h3>注册新用户
          <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a>
          </span>
        </h3>
        <div class="content">
          <label for="phone">手机号:</label>
          <input type="tel" id="phone" name="phone" placeholder="请输入你的手机号" v-model="phone">
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
          <label for="code">验证码:</label>
          <input type="text" id="code" placeholder="请输入验证码" v-model="code">
          <button style="width: 100px; height: 39px;" @click="getCode">获取验证码</button>
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
          <label for="password">登录密码:</label>
          <input type="password" id="password" placeholder="请输入你的登录密码" v-model="password" autocomplete="off">
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
          <label for="password1">确认密码:</label>
          <input type="password" id="password1" placeholder="请输入确认密码" v-model="password1" autocomplete="off">
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="controls">
          <input name="m1" type="checkbox" :checked="agree">
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="btn">
          <button @click="finishRegister">完成注册</button>
        </div>
      </div>
    </form>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      phone: '',
      code: '',
      password: '',
      // 确认密码
      password1: '',
      // 是否确认
      agree: true
    }
  },
  methods: {
    // 获取验证码
    async getCode() {
      try {
        // 如果获取到验证码
        const { phone } = this;
        // 判断 phone是否存在，存在才派发actions
        phone && (await this.$store.dispatch('getCode', phone));
        this.code = this.$store.state.user.code;
      } catch (error) {
        alert(error.message)
      }
    },
    // 注册完成
    async finishRegister() {
      try {
        // 成功注册后进行路由跳转到登录界面
        const { phone, code, password, password1 } = this; // 此处一定加 ; 否则报错
        (phone && code && password == password1) && (await this.$store.dispatch('finishRegister', { phone, code, password }));
        this.$router.push('/login')
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>

<template>
  <div class="login">
    {{ message }}<br/>
    <input v-model="username" placeholder="用户名"><br/>
    <input v-model="password" placeholder="密码"><br/>
    <button v-on:click="login">登陆 </button>
  </div>
</template>

<script>
    export default {
      name: "login",
      data() {
        return {
          message: 'Vue 登陆页面',
          username: '',
          password: ''
        }
      },
      http: {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
      },
      methods: {
        login: function () {
          var _this = this;
          console.log(_this.username+_this.password);
          _this.$http.post('http://localhost:8080/person/login', {
                username: _this.username,
                password: _this.password
          },{emulateJSON:true}
          )
            .then(function (response) {
              var errorcode = response.data.code;
              if (errorcode == "200") {
                _this.$router.push(
                  { path: '/HelloWorld',
                    query: {
                      user: response.data.data,
                    }
                  });
              } else {
                _this.$router.push({ path: '/Fail' });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }

    }
</script>

<style scoped>

</style>

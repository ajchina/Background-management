<template>
  <div>
    <h2>用户</h2>
    <div>
      <input type="text" v-model="username" />
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    login() { 
        this.$store.dispath(`user/login`, {username: this.username})
        .then(() => {
          this.$router.push({
            path: this.$router.query.redirect || '/'
          })
        })
        .catch(() => {
          alert('登陆失败')
        })
    }
  }
};
</script>
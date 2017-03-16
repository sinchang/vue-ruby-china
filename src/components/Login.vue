<template>
  <div>
    <modal title="login" ok-text="login" :width="520" :is-show="isShow" transition="fadeDown" @close="hide" :on-ok="login">
      <label class="label">Username</label>
      <p class="control">
        <input class="input" type="text" v-model="username">
      </p>
      <label class="label">Password</label>
      <p class="control">
        <input class="input" type="password" v-model="password">
      </p>
    </modal>
  </div>
</template>

<script>
  import util from '../common/js/util.js';

  export default {
    name: 'login',
    props: {
      isShow: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      hide() {
        this.$parent.loginVisible = false;
        this.username = '';
        this.password = '';
      },
      login() {
        util.fetch({
          method: 'POST',
          url: 'https://ruby-china.org/oauth/token',
          data: {
            client_id: '17c5757d',
            client_secret: 'a9a40bae6681a4d25ca58d03918074ee4c9a42a53b0ad69b6a149f1e38537c92',
            grant_type: 'password',
            password: this.password,
            username: this.username
          },
          successCallback: (res) => {
            util.createCookie('fe_token', res.data.access_token, 1);
            this.fetchUserData();
          }
        })
      },
      fetchUserData() {
        util.fetch({
          url: util.APIURL + 'users/me',
          successCallback: (res) => {
            let user = res.data.user;
            util.setLocalStorage('fe_vue', {
              loginName: user.login,
              avatar_url: user.avatar_url
            });
            this.$parent.loginName = user.login;
            this.$parent.avatar_url = user.avatar_url;
            this.$router.push({name: 'home'});
          }
        })
      }
    }
  }
</script>

<template>
  <div class="columns app-body">
    <div class="column is-one-quarter">
      <a href="/" class="navbar-brand"><b>Ruby</b> China</a>
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <router-link :to="{name: 'home'}" class="menu-item">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'topics', params: {type: 'default'}}" class="menu-item">Topics</router-link>
          </li>
          <li>
            <router-link :to="{name: 'node', params: {id: '25'}}" class="menu-item">Jobs</router-link>
          </li>
          <li>
            <router-link :to="{name: 'node', params: {id: '23'}}" class="menu-item">Homeland</router-link>
          </li>
          <li>
            <a href="https://gems.ruby-china.org/" class="menu-item" target="_blank">Gem</a>
          </li>
        </ul>
      </aside>
    </div>
    <div class="column app-right">
      <div class="user-info">
        <a class="button is-link" @click="showCreateForm">New</a>
        <a href="javascript:;" @click="toggle" class="button is-link" v-if="!loginName">login</a>
        <router-link :to="'/user/' + loginName" v-if="loginName">
          <img :src="avatar_url" alt="avatar" class="avatar">
          <strong>{{loginName}}</strong>
        </router-link>
      </div>
      <router-view class="view"></router-view>
    </div>
    <login :isShow="loginVisible"></login>
    <create :isShow="createVisible"></create>
  </div>
</template>

<script>
  import util from '../common/js/util.js';
  import Create from './Create';
  import Login from './Login';

  export default {
    name: 'v-header',
    data() {
      return {
        loginVisible: false,
        createVisible: false,
        loginName: '',
        avatar_url: ''
      }
    },
    mounted() {
      this.loginName = util.readCookie('fe_token') && util.getLocalStorage('fe_vue') && util.getLocalStorage('fe_vue').loginName;
      this.avatar_url = util.readCookie('fe_token') && util.getLocalStorage('fe_vue') && util.getLocalStorage('fe_vue').avatar_url;
    },
    methods: {
      toggle() {
        this.loginVisible = !this.loginVisible;
      },
      showCreateForm() {
        if (!this.loginName) {
          alert('请先登录');
          return;
        }
        this.createVisible = true;
      }
    },
    components: {
      Create,
      Login
    }
  };

</script>

<style scoped>
  .navbar-brand {
    display: block;
    color: #333;
    font-size: 18px;
    padding-left: 16px;
    padding-bottom: 45px;
  }

  .navbar-brand b {
    color: #EB5424;
  }

  .menu {
    box-shadow: none;
  }

  .columns {
    margin-right: 0;
  }

  .column {
    background-color: #f6f6f6;
    padding: 50px;
  }

  .is-one-quarter {
    padding: 50px;
    width: 20%;
    background-color: #fff;
  }

  .app-right {
    width: 80%;
  }

  .columns:not(:last-child) {
    margin-bottom: 0;
  }

  .user-info {
    text-align: right;
    margin-bottom: 20px;
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>

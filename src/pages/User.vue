<template>
  <section class="hero">
    <div class="hero-body">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="user.avatar_url" class="avatar">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <strong>{{user.name}}</strong>
            <small>@{{user.login}}</small>
            <a class="button is-small" @click="follow" v-text="followed" v-if="isShow"></a>
            <nav class="level">
              <div class="level-left">
                <span class="level-item">{{user.topics_count}} topics</span>
                <span class="level-item">{{user.followers_count}} followers</span>
                <span class="level-item">{{user.following_count}} following</span>
              </div>
            </nav>
            <div v-html="user.bio"></div>
          </div>
        </div>
        <div class="media-right">
          <a :href="'https://github.com/' + user.github" class="icon" v-if="user.github" target="_blank"><i class="fa fa-github"></i></a>
          <a :mailto="user.email" class="icon" v-if="user.email"><i class="fa fa-envelope-o"></i></a>
          <a :href="'https://twitter.com/' + user.twitter" class="icon" v-if="user.twitter" target="_blank"><i class="fa fa-twitter"></i></a>
          <a :href="user.website" class="icon" v-if="user.website" target="_blank"><i class="fa fa-chrome" target="_blank"></i></a>
        </div>
      </article>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <ul>
            <li>
              <router-link :to="{name: 'u-topics'}" :class="currentPath == 'u-topics' ? 'is-active' : ''">topics
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'u-replies'}" activeClass="is-active">replies</router-link>
            </li>
            <li>
              <router-link :to="{name: 'u-favorites'}" activeClass="is-active">favorites</router-link>
            </li>
            <li>
              <router-link :to="{name: 'u-following'}" activeClass="is-active">following</router-link>
            </li>
            <li>
              <router-link :to="{name: 'u-followers'}" activeClass="is-active">followers</router-link>
            </li>
          </ul>
      </nav>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  import util from '../common/js/util';

  export default {
    name: 'user',
    data() {
      return {
        user: {},
        meta: {},
        isShow: util.readCookie('fe_token'),
        currentPath: 'u-topics',
      }
    },
    watch: {
      '$route'(to, from) {
        this.currentPath = to.name;
        this.fetchData();
      }
    },
    computed: {
      followed() {
        return this.meta.followed ? 'unfollow' : 'follow';
      }
    },
    mounted() {
      this.currentPath = this.$route.name;
      this.fetchData();
    },
    methods: {
      fetchData() {
        util.fetch({
          url: util.APIURL + 'users/' + this.$route.params.id,
          successCallback: (res) => {
            this.meta = res.data.meta;
            this.user = res.data.user;
          }
        })
      },
      follow() {
        util.fetch({
          method: 'POST',
          url: util.APIURL + 'users/' + this.$route.params.id + '/' + this.followed,
          successCallback: (res) => {
            if (res.data.ok === 1) {
              this.meta.followed = this.followed === 'follow';
            }
          }
        })
      }
    }
  }

</script>

<style scoped>
  .tabs li a.is-active {
    border-color: #dbdbdb;
    border-bottom-color: transparent!important;
    background-color: #fff;
    color: #3c81df;
  }

  .hero .tabs ul {
    justify-content: center;
    border-bottom: 1px solid #dbdbdb;
  }

  .media {
    margin-left: 40px;
  }

  .media-right {
    margin-right: 40px;
  }

  .level:not(:last-child) {
    margin-bottom: 0;
  }
</style>

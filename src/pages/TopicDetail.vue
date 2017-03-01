<template>
    <div class="section">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <h2 class="title">{{topic.title}}</h2>
              <p>
                <router-link :to="'/user/' + user.login">{{user.login}} </router-link> · for
                <router-link :to="'/node/' + topic.node_id">{{topic.node_name}}</router-link> · Created at {{topic.created_at | formatTime}} <span v-if="topic.last_reply_user_login">· Last by <router-link :to="'/user/' + topic.last_reply_user_login" >{{topic.last_reply_user_login}}</router-link> replied at {{topic.replied_at | formatTime}} </span>·
                {{topic.hits}} hits</p>
            </div>
          </div>
        </nav>
        <div class="markdown-body">
          <div v-html="topic.body_html">
          </div>
          <nav class="panel">
            <p class="panel-heading">
              共收到 {{replies.length}} 条回复
            </p>
            <div class="panel-block">
              <reply :reply="reply" v-for="reply in replies"></reply>
              <div class="columns" v-if="isShow">
                <div class="column">
                  <markdown :onchange="cb"></markdown>
                  <button class="button is-primary reply-btn" @click="reply">reply</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
  import util from '../common/js/util';
  import reply from '../components/Reply';
  import markdown from '../components/Markdown';

  export default {
    name: 't-detail',
    data() {
      return {
        topic: {},
        isShow: util.readCookie('fe_token'),
        user: {},
        replies: [],
        output: ''
      }
    },
    mounted() {
      util.fetch({
        url: util.APIURL + 'topics/' + this.$route.params.id,
        successCallback: (res) => {
          this.topic = res.data.topic;
          this.user = this.topic.user;
        }
      });

      util.fetch({
        url: util.APIURL + 'topics/' + this.$route.params.id + '/replies',
        successCallback: (res) => {
          this.replies = res.data.replies;
        }
      })
    },
    methods: {
      reply() {
        util.fetch({
          url: util.APIURL + 'topics/' + this.$route.params.id + '/replies',
          method: 'POST',
          data: {
            body: this.output
          },
          successCallback: (res) => {
            window.location.reload();
          }
        })
      },
      cb(content) {
        this.output = content;
      }
    },
    components: {
      reply,
      markdown
    }
  }

</script>

<style scoped>
  .level-item .title {
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: .3em;
  }

  .panel {
    margin-top: 1em;
    border: none;
  }

  .panel .panel-heading {
    border-top: 1px solid #dbdbdb;
    background-color: #fff;
    font-weight: 700;
  }

  .reply-btn {
    margin-left: 10px;
  }
</style>

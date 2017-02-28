<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <router-link :to="'/user/' + reply.user.login"><img :src="reply.user.avatar_url"></router-link>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
          <strong><router-link :to="'/user/' + reply.user.login">{{reply.user.login}}</router-link></strong>
          <div v-html="reply.body_html" class="reply-content"></div>
          <small>replied at {{reply.created_at | formatTime}}</small>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'reply',
    props: {
      reply: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .reply-content {
    margin-top: 10px;
  }
</style>

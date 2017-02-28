<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <router-link :to="'/user/' + topic.user.id"><img :src="topic.user.avatar_url"></router-link>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong><router-link :to="{name: 'u-topics', params: {id: topic.user.login}}">{{topic.user.login}}</router-link></strong><small class="node-name"><router-link :to="'/node/' + topic.node_id">{{topic.node_name}}</router-link></small>
          <br> <router-link :to="'/topic/' + topic.id">{{topic.title}}</router-link>
          <br>
          <span v-if="topic.last_reply_user_login">Last by {{topic.last_reply_user_login}} replied at {{topic.replied_at | formatTime}}</span>
          <span v-if="!topic.last_reply_user_login">Created at {{topic.created_at | formatTime}}</span>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="tag is-light">{{topic.replies_count}}</span>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'topic',
    props: {
      topic: {
        type: Object,
        required: true
      }
    }
  };

</script>

<style scoped>
  .image.is-64x64 {
    overflow: hidden;
  }

  .node-name {
    padding-left: 10px;
  }
</style>

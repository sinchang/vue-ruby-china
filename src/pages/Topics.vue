<template>
  <div>
    <!-- Main container -->
    <nav class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <p class="level-item">
          <router-link :to="{name: 'topics', params: {type: 'default'}}" activeClass="active">default</router-link>
        </p>
        <p class="level-item">
          <router-link :to="{name: 'topics', params: {type: 'excellent'}}" activeClass="active">excellent</router-link>
        </p>
        <p class="level-item">
          <router-link :to="{name: 'topics', params: {type: 'popular'}}" activeClass="active">popular</router-link>
        </p>
        <p class="level-item">
          <router-link :to="{name: 'topics', params: {type: 'recent'}}" activeClass="active">recent</router-link>
        </p>
        <p class="level-item">
          <router-link :to="{name: 'topics', params: {type: 'no_reply'}}" activeClass="active">no_reply</router-link>
        </p>
      </div>
    </nav>
    <topics-list></topics-list>
  </div>
</template>

<script>
  import util from '../common/js/util';
  import topicsList from '../components/TopicList'

  export default {
    name: 'topics',
    components: {
      topicsList
    }
  };

</script>

<style scoped>
  .level-item .active {
    color: #363636;
  }
</style>

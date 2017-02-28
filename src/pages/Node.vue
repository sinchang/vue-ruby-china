<template>
  <div>
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

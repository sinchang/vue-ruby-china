<template>
  <div>
    <div class="section">
      <div class="container">
        <topic :topic="topic" v-for="topic in topics"></topic>
      </div>
    </div>
    <pager :onchange="pageCb"></pager>
  </div>
</template>

<script>
  import util from '../common/js/util';
  import topic from './Topic';
  import pager from './Pager';
  export default {
    name: 'topics-list',
    data() {
      return {
        topics: [],
        page: 1,
      }
    },
    mounted() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        util.fetch({
          url: util.APIURL + 'topics',
          params: {
            type: this.$route.params.type || 'default',
            offset: (this.page - 1) * 20,
            limit: 20,
            node_id: this.$route.params.id
          },
          successCallback: (res) => {
            if (!res.data.topics.length) return;
            this.topics = res.data.topics;
          }
        })
      },
      pageCb(page) {
        this.page = page;
        this.fetchData();
        window.scrollTo(0, 0);
      }
    },
    components: {
      topic,
      pager
    }
  };

</script>

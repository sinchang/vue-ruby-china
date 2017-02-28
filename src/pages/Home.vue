<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="heading">
          <h2 class="title excellent">excellent</h2>
        </div>
        <topic :topic="topic" v-for="topic in topics"></topic>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="heading">
          <h2 class="title">nodes</h2>
          <div class="nodes">
            <span class="tag" v-for="node in nodes"><router-link :to="'/node/' + node.id">{{node.name}}</router-link></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import util from '../common/js/util';
  import topic from '../components/Topic';

  export default {
    name: 'home',
    data() {
      return {
        topics: [],
        nodes: []
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        util.fetch({
          url: util.APIURL + 'topics',
          params: {
            type: 'excellent',
            offset: 0,
            limit: 20
          },
          successCallback: (res) => {
            this.topics = res.data.topics
          }
        });

        if (util.getLocalStorage('fe_vue')) {
          this.nodes = util.getLocalStorage('fe_vue').nodes;
          return;
        }

        util.fetch({
          url: util.APIURL + 'nodes',
          successCallback: (res) => {
            this.nodes = res.data.nodes;
            let storage = util.getLocalStorage('fe_vue') || {};
            storage.nodes = this.nodes;
            util.setLocalStorage('fe_vue', storage);
          }
        })

      }
    },
    components: {
      topic
    }
  };

</script>

<style scoped>
  .nodes .tag {
    margin: 5px;
  }

  .excellent {
    margin-bottom: 20px;
  }
</style>

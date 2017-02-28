<template>
  <div>
    <slot :items="items"></slot>
    <pager :onchange="pageCb"></pager>
  </div>
</template>

<script>
  import util from '../common/js/util';
  import pager from './Pager';

  export default {
    name: 'u-table',
    data() {
      return {
        items: []
      }
    },
    props: {
      ajax: {
        required: true,
        type: String
      },
      responseName: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        page: 1,
        items: []
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        util.fetch({
          url: util.APIURL + 'users/' + this.$route.params.id + '/' + this.ajax,
          params: {
            order: 'recent',
            offset: (this.page - 1) * 20,
            limit: 20
          },
          successCallback: (res) => {
            if (!res.data[this.responseName].length) return;
            this.items = res.data[this.responseName];
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
      pager
    }
  }
</script>

<style scoped>
  .tabs a {
    border-bottom: none;
  }

  .table td {
    padding: 8px 20px;
  }
</style>

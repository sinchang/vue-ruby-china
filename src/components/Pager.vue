<template>
  <div id="pager">
    <nav class="pagination">
      <ul>
        <li>
          <a class="button" @click="prev">
            <i class="fa fa-angle-left"></i>
          </a>
        </li>
        <li>
          <a class="button" @click="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'pager',
    props: {
      onchange: {
        required: true,
        type: Function
      }
    },
    data() {
      return {
        current: 1
      }
    },
    methods: {
      prev() {
        if (this.current <= 1) {
          return;
        }
        this.current--;
        this.onchange(this.current);
      },
      next() {
        this.current++;
        this.onchange(this.current);
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin-bottom: 30px;
  }
</style>

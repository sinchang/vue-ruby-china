<template>
  <div>
      <tabs type="toggle">
        <tab-item label="Edit">
          <div class="control">
            <textarea class="textarea" :value="markdownStr" @input="update"></textarea>
          </div>
        </tab-item>
        <tab-item label="Preview">
          <div class="control">
            <div class="textarea markdown-body" placeholder="Textarea" v-html="output"></div>
          </div>
        </tab-item>
      </tabs>
  </div>
</template>

<script>
  import marked from 'marked';

  export default {
    name: 'markdown',
    props: {
      onchange: {
        type: Function
      }
    },
    data() {
      return {
        markdownStr: '',
      }
    },
    computed: {
      output() {
        return marked(this.markdownStr, {sanitize: true});
      }
    },
    methods: {
      update(e) {
        this.markdownStr = e.target.value;
        this.onchange(this.output);
      }
    }
  }
</script>

<style scoped>
  .reply-btn {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }

  .columns {
    margin-top: 20px;
  }
</style>

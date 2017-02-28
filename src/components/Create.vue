<template>
  <div>
    <modal title="new topic" :width="800" :is-show="isShow" transition="fadeDown" @close="hide" :on-ok="submit">
      <p class="control has-addons">
        <span class="select">
          <select v-model="node_id">
            <option :value="node.id" v-for="node in nodes" v-text="node.name"></option>
          </select>
        </span>
        <input class="input is-expanded" type="text" placeholder="title" v-model="title">
      </p>
      <markdown :onchange="cb"></markdown>
    </modal>
  </div>
</template>

<script>
  import markdown from './Markdown';
  import util from '../common/js/util';

  export default {
    name: 'create',
    props: {
      isShow: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        nodes: util.getLocalStorage('fe_vue') && util.getLocalStorage('fe_vue').nodes,
        node_id: 2,
        title: '',
        content: ''
      }
    },
    mounted() {
    },
    methods: {
      hide() {
        this.$parent.createVisible = false;
        this.title = '';
        this.content = '';
        this.node_id = 2;
      },
      cb(content) {
        this.content = content;
      },
      submit() {
        if (!this.title) {
          alert('标题不能为空!');
          return;
        }
        if (!this.content) {
          alert('正文不能为空!');
          return;
        }
        util.fetch({
          method: 'POST',
          url: util.APIURL + 'topics',
          data: {
            title: this.title,
            body: this.content,
            node_id: this.node_id
          },
          successCallback: (res) => {
            this.hide();
            alert('success');
          }
        })
      }
    },
    components: {
      markdown
    }
  }
</script>

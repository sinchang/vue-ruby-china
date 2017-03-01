<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/Header';
  import vFooter from './components/Footer';

  export default {
    name: 'app',
    components: {
      vHeader,
      vFooter
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }

  body, html {
    height: 100%;
  }

  .tabs .tab-list {
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 0;
  }

  .app-body {
    min-height: 100%;
    padding-bottom: 90px;
  }

  .image.is-64x64 {
    overflow: hidden;
  }

  .markdown-body .highlight {
    width: 100%;
  }
</style>

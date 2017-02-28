<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Made with love by <a href="https://twitter.com">sinchang</a></strong>
        </p>
        <p>
          <a class="icon" href="https://github.com/sinchang/vue-ruby-china">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'v-footer',
  };
</script>

<style>
  .footer,
  .footer strong,
  .footer .content a {
    color: #fff;
  }

  .footer .content a:not(.button):visited {
    color: #fff;
  }

  .footer {
    height: 100px;
    margin-top: -90px;
    padding: 30px 0 0 0;
  }
</style>

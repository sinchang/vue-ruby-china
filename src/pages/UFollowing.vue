<template>
  <div class="u-relation">
    <u-relation :ajax="ajax" :responseName="responseName"></u-relation>
  </div>
</template>

<script>
  import uRelation from '../components/URelation';
  export default {
    name: 'u-following',
    data() {
      return {
        ajax: 'following',
        responseName: 'following'
      }
    },
    components: {
      uRelation
    }
  }
</script>

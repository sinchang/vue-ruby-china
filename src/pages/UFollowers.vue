<template>
  <div class="u-relation">
    <u-relation :ajax="ajax" :responseName="responseName"></u-relation>
  </div>
</template>

<script>
  import uRelation from '../components/URelation';
  export default {
    name: 'u-followers',
    data() {
      return {
        ajax: 'followers',
        responseName: 'followers'
      }
    },
    components: {
      uRelation
    }
  }
</script>

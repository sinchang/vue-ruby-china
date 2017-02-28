<template>
  <div>
    <u-table :ajax="ajax" :responseName="responseName">
      <template scope="props">
        <div class="user">
          <div class="media" v-for="item in props.items">
            <div class="media-left">
              <figure class="image" style="height: 40px; width: 40px;">
                <router-link :to="'/user/' + item.login"><img :src="item.avatar_url"></router-link>
              </figure>
            </div>
            <div class="media-content">
              <p class="title" :title="item.name"><router-link :to="'/user/' + item.login">{{item.login}}</router-link></p>
            </div>
          </div>
        </div>
      </template>
    </u-table>
  </div>
</template>

<script>
  import uTable from './UTable';
  export default {
    name: 'u-relation',
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
    components: {
      uTable
    }
  }
</script>

<style scoped>
  .user {
    padding-left: 40px;
  }
</style>

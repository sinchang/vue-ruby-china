<template>
  <div>
    <u-table :ajax="topics" :responseName="topics">
      <template scope="props">
        <table class="table">
          <tbody>
            <tr v-for="item in props.items">
              <td><router-link :to="'/node/' + item.node_id">{{item.node_name}}</router-link></td>
              <td><router-link :to="'/topic/' + item.id">{{item.title}}</router-link></td>
              <td>{{item.replies_count}}/{{item.likes_count}}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </u-table>
  </div>
</template>

<script>
  import uTable from '../components/UTable';
  export default {
    name: 'u-topics',
    data() {
      return {
        topics: 'topics'
      }
    },
    components: {
      uTable
    }
  }
</script>

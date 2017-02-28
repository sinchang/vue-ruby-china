<template>
  <div>
    <u-table :ajax="ajax" :responseName="responseName">
      <template scope="props">
        <table class="table">
          <tbody>
            <tr v-for="item in props.items">
              <td><router-link :to="'/node/' + item.node_id">{{item.node_name}}</router-link></td>
              <td><router-link :to="'/topic/' + item.id">{{item.title}}</router-link></td>
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
    name: 'u-favorites',
    data() {
      return {
        ajax: 'favorites',
        responseName: 'topics'
      }
    },
    components: {
      uTable
    }
  }
</script>

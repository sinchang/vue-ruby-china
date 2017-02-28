<template>
  <div>
    <u-table :ajax="ajax" :responseName="responseName">
     <template scope="props">
       <table class="table">
         <tbody>
           <tr v-for="item in props.items">
             <td>
               <router-link :to="'/topic/' + item.topic_id">{{item.topic_title}}</router-link> at {{item.updated_at | formatTime}}
               <p v-html="item.body_html" class="reply-content"></p>
             </td>
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
    name: 'u-replies',
    data() {
      return {
        responseName: 'replies',
        ajax: 'replies'
      }
    },
    components: {
      uTable
    }
  }
</script>

<style scoped>
  .reply-content {
    margin-top: 10px;
  }
</style>

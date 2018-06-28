<template>
    <div>
        <table>
            <tbody>
                <tr v-for="(row, rind) in billdata" :key="rind">
                    <td>{{ row.data1 }}</td>
                    <td>{{ row.data2 }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import bill_data from "../../services/bills";
export default {
  name: 'Bills',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      billdata: []
    }
  },
  // Make the data in the table the bills data
  mounted () {
    bill_data.bills().then( (res) => {
      console.log(res.data.data);
      this.billdata = res.data.data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
    border: 1px solid red;
}
</style>

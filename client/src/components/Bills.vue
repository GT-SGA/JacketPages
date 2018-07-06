<template>
    <div>
        <!-- Table with all the bills -->
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>SGA ID</th>
                    <th>GT Username</th>
                    <th>Phone</th>
                    <th>Home Phone</th>
                    <th>Email</th>
                    <th>Alternate Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Level</th>
                    <th>Local address</th>
                    <th>Home Address</th>
                    <th>Last Login</th>
                    <th>Profile Picture</th>
                    <th>Profile Text</th>
                </tr>
                <tr v-for="(row, rind) in billdata" :key="rind">
                    <td>{{ row.id }}</td>
                    <td>{{ row.sga_id }}</td>
                    <td>{{ row.gt_user_name }}</td>
                    <td>{{ row.phone }}</td>
                    <td>{{ row.home_phone }}</td>
                    <td>{{ row.email }}</td>
                    <td>{{ row.alt_email }}</td>
                    <td>{{ row.first_name }}</td>
                    <td>{{ row.last_name }}</td>
                    <td>{{ row.level }}</td>
                    <td>{{ row.local_addr }}</td>
                    <td>{{ row.home_addr }}</td>
                    <td>{{ row.last_login }}</td>
                    <td>{{ row.profile_picture }}</td>
                    <td>{{ row.profile_text }}</td>
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

<template>
<section class="section">
  <div class="row">
    <div class="col-lg-12">

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Admin Users list</h5>
          <!-- Table with stripped rows -->
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
              <tr v-for="users in adminUsers">
                <th scope="col">{{ users.id }}</th>
                <th scope="col">{{ users.name }}</th>
                <th scope="col">{{ users.email }}</th>
                <th scope="col" v-for="role in users.roles">{{ role.role_id }}</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <!-- End Table with stripped rows -->

        </div>
      </div>
    </div>
  </div>
</section>

</template>
<script setup>
import { ref, onMounted} from "vue";
import { UseAuthStore } from "../../stores/auth";
import axios from "axios";

const adminUsers=ref([]);

onMounted(() => {
    console.log(UseAuthStore().$state.token);
    axios.get("sanctum/csrf-cookie");
   axios
      .get('api/admin/admin-users/list',{headers: {
    'Authorization': `${UseAuthStore().$state.token}`
  }})
      .then(response => {
        // this.info = response.data.bpi
        adminUsers.value=response.data.data.admins.data;
        console.log(adminUsers);
      })
      .catch(error => {
        console.log(error)
        //this.errored = true
      })
    //   .finally(() =>)

})

</script>

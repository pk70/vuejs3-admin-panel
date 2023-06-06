<template>
    <div class="pagetitle">
      <h1>Profile</h1>
      </div>
   <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title"></h5>

              <!-- Horizontal Form -->
              <form>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="name" :value="authUsers.name">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-4">
                    <input type="email" class="form-control" readonly id="email" :value="authUsers.email">
                  </div>
                </div>
                <div class="text-left">
                  <button type="reset" class="btn btn-secondary">Reset</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form><!-- End Horizontal Form -->

            </div>
          </div>



        </div>

      </div>
    </section>
    
  </template>
  <script setup>
  import { ref } from "vue";
  import { UseAuthStore } from "../stores/auth";
  const authUsers = ref(
   UseAuthStore().$state.authUser
);
 
  </script>


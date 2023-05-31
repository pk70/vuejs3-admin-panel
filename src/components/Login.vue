<template>
  <div class="container">
    <section
      class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="d-flex justify-content-center py-4">
              <a
                href="/dashboard"
                class="logo d-flex align-items-center w-auto"
              >
                <img src="../assets/img/logo.png" alt="" />
                <span class="d-none d-lg-block">NiceAdmin</span>
              </a>
            </div>
            <!-- End Logo -->

            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">
                    Login to Your Account
                  </h5>
                  <p class="text-center small">
                    Enter your email &amp; password to login
                  </p>
                </div>
                <!-- <cube-spin></cube-spin> -->
                <form class="row g-3" @submit.prevent="loginM">
                  <div class="col-12">
                    <label for="email" class="form-label">email</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"
                        >@</span
                      >
                      <input
                        type="text"
                        name="email"
                        v-model="form.email"
                        class="form-control"
                        id="youremail"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      v-model="form.password"
                      name="password"
                      class="form-control"
                      id="yourPassword"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>
                  <div class="col-12">
                    <input
                      class="btn btn-primary w-100"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">
                      Don't have account?
                      <a href="pages-register.html">Create an account</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div class="credits">Designed by <a href="">Moinul</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { UseAuthStore } from "../stores/auth";
import { useToast } from "vue-toastification";
import router from '../router';
// import CubeSpin from 'vue-loading-spinner/components/Cube'
const toast = useToast();
//let isLoading = false;
const form = ref({
  email: "",
  password: "",
});
const loginM = async () => {
  UseAuthStore()
    .login(form.value)
    .then((res) => {
      // assign state users with response data
     // isLoading = true;
      router.push({ name: "Dashboard" });
    })
    .catch((error) => {
      console.log(error)
      if (error && error.response.status == 422) {
        toast.error("Email and password are invalid", {
          timeout: 3000,
        });
      }
    });
};
</script>

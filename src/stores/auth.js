import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const UseAuthStore = defineStore("authUser", {
    state: () => ({
        loggedIn: localStorage.getItem("token") ? true : false,
        authUser: localStorage.getItem("auth_users") ? JSON.parse(localStorage.getItem("auth_users")) : [],
        token: localStorage.getItem("token") ? localStorage.getItem("token") : null
    }),

    getters: {},

    actions: {
        async login(credentials) {
            await axios.get("sanctum/csrf-cookie");

            const response = (await axios.post("api/admin/login", credentials)).data;

            if (response) {
                const token = `Bearer ${response.data.token}`;
                localStorage.setItem("token", token);
                localStorage.setItem("auth_users", JSON.stringify(response.data.user));
                axios.defaults.headers.common["Authorization"] = token;

                router.push('/dashboard');
                //await this.ftechUser();
            }
        },

        async logout() {

            await axios.get("sanctum/csrf-cookie");
            axios.defaults.headers.common["Authorization"] = this.token;
            const response = (await axios.post("api/admin/logout")).data;

            if (response) {
                localStorage.removeItem("token");

                this.$reset();
                router.push({ name: "Login" });
            }
        },

        async ftechUser() {
            // this.user = (await axios.get("api/admin/users")).data;

            // this.loggedIn = true;
        },
    }

});
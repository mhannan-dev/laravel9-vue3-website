<template>
    <div class="loginForm">
        <p class="text-danger" v-if="error">{{ error }}</p>
        <form @submit.prevent="login">
            <div class="box">
                <h1>Login</h1>

                <input type="email" name="email" v-model="form.email" class="email" placeholder="Email" />
                <input type="password" name="email" v-model="form.password" class="email" placeholder="Password" />

                <button type="submit">
                    Sign In
                </button> <!-- End Btn -->



            </div> <!-- End Box -->

        </form>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter
let form = reactive({
    email: "",
    password: ""
})
let error = ref('')
const login = async () => {
    await axios.post('/api/login', form)
        .then(response => {
            if (response.data.success) {
                localStorage.setItem('token', response.data.data.token)
                route.push('/dashboard')
            } else {
                error.value = response.data.message
            }
        })
}

</script>

<style lang="css">
.text-danger {
    color: red;
}

.loginForm {
    font-family: 'Open Sans', sans-serif;
    /* background: #3498db; */
    margin: 0 auto 0 auto;
    width: 100%;
    text-align: center;
    margin: 20px 0px 20px 0px;
}

p {
    font-size: 12px;
    text-decoration: none;
    color: #ffffff;
}

h1 {
    font-size: 1.5em;
    color: #525252;
}

.box {
    background: white;
    width: 300px;
    border-radius: 6px;
    margin: 0 auto 0 auto;
    padding: 0px 0px 70px 0px;
    border: #5abbfb 2px solid;
}

.email {
    background: #ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width: 250px;
    color: #AAAAAA;
    margin-top: 10px;
    font-size: 1em;
    border-radius: 4px;
}

.password {
    border-radius: 4px;
    background: #ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width: 250px;
    font-size: 1em;
}

.btn {
    background: #2ecc71;
    width: 125px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    border-radius: 4px;
    border: #27ae60 1px solid;

    margin-top: 20px;
    margin-bottom: 20px;
    float: left;
    margin-left: 16px;
    font-weight: 800;
    font-size: 0.8em;
}

.btn:hover {
    background: #2CC06B;
}

#btn2 {
    float: left;
    background: #3498db;
    width: 125px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    border-radius: 4px;
    border: #2980b9 1px solid;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-weight: 800;
    font-size: 0.8em;
}

#btn2:hover {
    background: #3594D2;
}
</style>

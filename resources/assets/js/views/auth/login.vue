<template>
    <section id="login-wrapper">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card border mb-0">
                        <img src="/images/logo-bmw.png" width="250" class="d-block mx-auto"/>
                        <div class="card-body px-lg-5 pb-lg-4 pt-lg-3">

                            <div class="text-center text-muted mb-4">
                                <h4 class="mb-0">BMW CLUB MONTRÉAL</h4>
                            </div>

                            <form role="form" id="loginform" @submit.prevent="submit">

                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Courriel" type="email" name="email" v-model="loginForm.email">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Mot de passe" type="password" name="password" v-model="loginForm.password">
                                    </div>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-outline-default waves-effect waves-light mt-4 mb-2" type="submit">Se Connecter</button>
                                </div>
                            </form>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <router-link to="/password" class="text-muted m-l-5"><small>Mot de passe oublié ?</small></router-link>
                                </div>
                                <div class="col-6 text-right">
                                    <router-link to="/register" class="text-muted m-l-5"><small>Créer un nouveau compte</small></b></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import helper from '../../services/helper'
    import GuestFooter from '../../layouts/guest-footer.vue'

    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        mounted(){
        },
        methods: {
            submit(e){
                axios.post('/api/auth/login', this.loginForm).then(response =>  {
                    localStorage.setItem('auth_token',response.data.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                    toastr['success'](response.data.message);
                    this.$router.push('/home')
                }).catch(error => {
                    toastr['error'](error.response.data.message);
                });
            }
        }
    }
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-10 col-lg-5 col-md-7">
            <div class="card border-0 mb-0">
                <img src="/images/logo-bmw.png" width="250" class="d-block mx-auto"/>
                <div class="card-body px-lg-5 py-lg-5">
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
                        <div class="custom-control custom-control-alternative custom-checkbox">
                            <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                            <label class="custom-control-label" for=" customCheckLogin">
                                <span class="text-muted">Remember me</span>
                            </label>
                        </div>
                        <div class="text-center">
                            <button id="submit-login" v-bind:class="[isLoading ? 'loading' : '', 'btn btn-outline-default waves-effect waves-light mt-4 mb-2']" type="submit">Se Connecter</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <router-link to="/password" class="text-muted m-l-5"><small>Mot de passe oublié ?</small></router-link>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/register" class="text-muted m-l-5"><small>Créer un nouveau compte</small></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import helper from '../../services/helper'
    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                isLoading: false
            }
        },
        mounted(){
        },
        methods: {
            submit(e){
                this.isLoading = true;

                axios.post('/api/auth/login', this.loginForm).then(response =>  {
                    localStorage.setItem('auth_token',response.data.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                    helper.notify(response.data.message, 'success');
                    this.$router.push('/home');
                    this.isLoading = false;
                }).catch(error => {
                    helper.notify(error.response.data.message, 'warning');
                    this.isLoading = false;
                });
            }
        }
    }
</script>

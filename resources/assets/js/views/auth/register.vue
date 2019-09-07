<template>
    <section id="register-wrapper">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 col-xl-3 col-lg-4 col-md-6">
                    <div class="card border mb-0">
                        <img src="/images/logo-bmw.png" width="250" class="d-block mx-auto"/>
                        <div class="card-body px-lg-5 pb-lg-4 pt-lg-3">
                            <form id="registerform" role="form" @submit.prevent="submit">

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                        </div>
                                        <input class="form-control" name="first_name" placeholder="Prénom" type="text" v-model="registerForm.first_name">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                        </div>
                                        <input class="form-control" name="last_name" placeholder="Nom de famille" type="text" v-model="registerForm.last_name">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" name="email" placeholder="Courriel" type="email" v-model="registerForm.email">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" name="password" placeholder="Mot de passe" type="password" v-model="registerForm.password">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" name="password_confirmation" placeholder="Mot de passe (confirmation)" type="password" v-model="registerForm.password_confirmation">
                                    </div>
                                </div>

                                <div class="row my-4">
                                    <div class="col-12 text-center">
                                        <div class="custom-control custom-control-alternative custom-checkbox">
                                            <input class="custom-control-input" id="customCheckRegister" type="checkbox" v-model="registerForm.privacy_policy">
                                            <label class="custom-control-label" for="customCheckRegister">
                                                <span class="text-muted">J'ai lu et j'accepte la <a href="#!">politique de confidentialité</a></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">Créer un compte</button>
                                </div>
                            </form>
                            <div class="row mt-3">
                                <p class="col-12 text-center"><small>ou</small></p>
                                <div class="col-12 text-center">
                                    <router-link to="/login" class="text-muted text-center m-l-5"><small>Connectez-vous</small></router-link>
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
    import helper from '../../services/helper';
    export default {
        data() {
            return {
                registerForm: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                    first_name: '',
                    last_name: '',
                    privacy_policy: false
                }
            }
        },
        mounted(){
        },
        methods: {
            submit(e){
                if(!this.registerForm.privacy_policy) {
                    helper.notify('Merci d\'accepter la politique de confidentialité' , 'warning');
                    return false;
                }

                axios.post('/api/auth/register', this.registerForm).then(response =>  {
                    helper.notify(response.data.message, 'success');
                    this.$router.push('/login');
                }).catch(error => {
                    helper.notify(error.response.data.message, 'warning');
                });
            }
        }
    }
</script>

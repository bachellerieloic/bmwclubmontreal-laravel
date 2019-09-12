<template>
    <nav id="navbar" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light justify-content-lg-center">
        <div class="">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-10 collapse-brand">
                            <h4 class="mb-0">BMW CLUB MONTREAL</h4>
                        </div>
                        <div class="col-2 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <span class="nav-link-inner--text">Accueil</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">
                            <span class="nav-link-inner--text">Se Connecter</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">
                            <span class="nav-link-inner--text">S'inscrire</span>
                        </router-link>
                    </li>
                </ul>
                <hr class="d-lg-none" />
                <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="https://www.facebook.com/groups/332206660458879/" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                            <i class="fa fa-facebook-square"></i>
                            <span class="nav-link-inner--text">Facebook</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'LandingNavbar',

        watch: {

            $route (to, from){
                if($('#navbar-collapse').hasClass('show')) {
                    $('.navbar-toggler').trigger('click');
                }
            }
        }
    }
</script>
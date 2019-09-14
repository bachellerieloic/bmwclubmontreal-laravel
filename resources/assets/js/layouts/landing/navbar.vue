<template>
    <nav id="navbar" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light justify-content-lg-center align-content-center">
            <div class="navbar-spread">
                <button class="navbar-toggler mx-auto d-flex d-lg-none align-items-center" type="button" data-toggle="collapse" data-target="#navbar-collapse"
                        aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon mr-2"></span>
                        <img src="/images/favicon.png" width="20px" class="mr-2">
                        <span>BMW Club Montreal</span>
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
                            <router-link to="/home" class="nav-link">
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
                    <ul class="navbar-nav align-items-lg-center d-lg-none">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="https://www.facebook.com/groups/332206660458879/"
                               target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                                <span class="nav-link-inner--text">Facebook</span>
                                <i class="fa fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-brand d-lg-none d-none">BMW Club Montreal</div>
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

<style>
    @media (min-width: 992px) {
        li a.nav-link.router-link-exact-active.active {
            border-bottom: 1px white solid;
            border-radius: 0 !important;
            color: rgba(255,255,255,.95) !important;
        }

        li a.nav-link:not(.active) {
            color: rgba(255,255,255,.65) !important;
        }
    }

</style>
<template>
    <div id="landing-page-layout" class="bg-default">
        <LandingNavbar></LandingNavbar>
        <div class="main-content">

            <div class="header bg-gradient-primary pt-2 pb-7 py-lg-8 pt-lg-9">
                <div class="container">
                    <div class="header-body text-center mb-4">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                                <h1 class="text-white">BMW CLUB MONTREAL</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>

    	    <router-view></router-view>
        </div>
        <GuestFooter></GuestFooter>
    </div>
</template>

<script>
    import LandingNavbar from './landing-navbar.vue';
    import GuestFooter from './guest-footer.vue';

    export default {
        components: {
            LandingNavbar,
            GuestFooter
        },
        methods : {
            notification(){
                toastr.options = {
                    "positionClass": "toast-top-right"
                };

                $('[data-toastr]').on('click',function(){
                    var type = $(this).data('toastr'),message = $(this).data('message'),title = $(this).data('title');
                    toastr[type](message, title);
                });
            }
        },
        mounted() {
        	$('body').removeClass('fix-header fix-sidebar card-no-border');
            this.notification();
        },
        destroyed(){
        }
    }
</script>
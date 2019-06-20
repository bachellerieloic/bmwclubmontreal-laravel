<template>
    <div id="">
        <app-sidebar></app-sidebar>

        <div class="main-content" id="panel">
                <app-top-navbar></app-top-navbar>
                <router-view></router-view>
            <app-footer></app-footer>
        </div>

    </div>
</template>


<script>
    import AppSidebar from './sidebar.vue'
    import AppFooter from './footer.vue'
    import AppTopNavbar from './top-navbar.vue'
    import helper from '../services/helper'
    export default {
        methods : {
            notification(){
                toastr.options = {
                    "positionClass": "toast-top-right"
                };

                $('[data-toastr]').on('click',function(){
                    var type = $(this).data('toastr'),message = $(this).data('message'),title = $(this).data('title');
                    toastr[type](message, title);
                });
            },
            getAuthUser(name){
                return this.$store.getters.getAuthUser(name);
            }
        },
        components: {
            AppSidebar, AppFooter, AppTopNavbar
        },
        mounted() {
            $(".sidenav").on("mouseenter", function() {
                console.log('mouseenter');
                $("body").hasClass("g-sidenav-pinned") || $("body").removeClass("g-sidenav-hide").removeClass("g-sidenav-hidden").addClass("g-sidenav-show");
            });

            $(".sidenav").on("mouseleave", function() {
                $("body").hasClass("g-sidenav-pinned") || ($("body").removeClass("g-sidenav-show").addClass("g-sidenav-hide"), setTimeout(function () {
                    $("body").removeClass("g-sidenav-hide").addClass("g-sidenav-hidden")
                }, 300))
            });

            if(!this.getAuthUser('email')){
                helper.authUser().then(response => {
                    this.$store.dispatch('setAuthUserDetail',{
                        first_name: response.profile.first_name,
                        last_name: response.profile.last_name,
                        email: response.user.email,
                        avatar:response.profile.avatar
                    });
                });
            }
        }
    }
</script>

<template>
    <div id="container" class="bg-default">

        <Navbar></Navbar>
        <div id="main">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from './navbar.vue';
    import Footer from './footer.vue';

    export default {
        head () {
            return {
                link: [
                    { rel: 'stylesheet', href: 'css/argon2.min.css' }
                ]
            }
        },
        components: {
            Navbar,
            Footer
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
<template>
    <div class="">
        <div id="landingPageCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div id="img1" class="carousel-item active"></div>
                <div id="img2" class="carousel-item"></div>
                <div id="img3" class="carousel-item"></div>
            </div>
        </div>
        <h1 class="text-white">About</h1>
        <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam debitis, eius expedita impedit labore quos ratione!
            Eveniet fuga harum laboriosam magni nobis odio, quaerat rem!
            Ab aliquam assumenda cum dolor ducimus ea eius enim esse
        </p>
    </div>
</template>

<script>
    import Login from '../auth/login';
    import Register from '../auth/register';


    export default {
        components : { Login, Register },
    }
</script>
<style>
    #landingPageCarousel .carousel-item {
        background-size: cover;
        min-height:500px;
        background-position-y: center;
    }

    #img1 {
        background-image:url("/images/background.jpg");
    }

    #img2 {
        background-image:url("/images/background.jpg");
    }

    #img3 {
        background-image:url("/images/background.jpg");
    }
</style>

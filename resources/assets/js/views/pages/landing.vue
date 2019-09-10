<template>
    <div class="">
        <div id="landingPageCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div id="img1" class="carousel-item active">
                    <div class="innerDiv py-5 m-auto">
                        <h1 class="mt-2 text-dark">Sorties Organisées BMW</h1>
                        <p class="mb-2 text-dark font-weight-bold">Un club qui partage les mêmes passions du voyage et de la moto</p>
                    </div>
                </div>
                <div id="img2" class="carousel-item">
                    <div class="innerDiv py-5 m-auto">
                        <h1 class="mt-2 text-dark">Plusieurs pays</h1>
                        <p class="mb-2 text-dark font-weight-bold">Le club part souvent aux États-unis, et organise des sorties au Mexique </p>
                    </div>
                </div>
                <div id="img3" class="carousel-item">
                    <div class="innerDiv py-5 m-auto">
                        <h1 class="mt-2 text-dark">Sorties Organisées BMW</h1>
                        <p class="mb-2 text-dark font-weight-bold">Un club qui partage la passion de la moto et du voyagesà</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <h1 class="text-white">À Propos du club</h1>
            <p class="text-white p-2">
                Le Club BMW Montréal accueille les amoureux de voyages.
                Chaque année, le groupe organise de nombreuses sorties, le tout dans une ambiance amicale et chaleureuse.
            </p>
        </div>

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

    #img1  {
        background-image:url("/images/banners/long-lake-1.jpg");
    }


    #img2 {
        background-image:url("/images/banners/long-lake-2.jpg");
    }

    #img3 {
        background-image: url("/images/banners/ottawa.jpg");
        background-position: end;
    }

    .innerDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        align-self:center;
        background-color: rgba(255, 255, 255, 0.86);
        text-align: center;
        margin-top:50%;
    }
</style>

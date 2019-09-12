<template>
    <div>
        <Carousel :autoplay="true" perPage="1">
                <Slide>
                    <div id="img1" class="slider-container">
                        <div class="innerDiv">
                            <h1 class="mt-2 text-dark">Sorties Organisées BMW</h1>
                            <p class="mb-2 text-dark font-weight-bold">Un club de motards et de voyageurs</p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div id="img2" class="slider-container">
                        <div class="innerDiv alt">
                            <h1 class="mt-2 text-dark">Plusieurs pays</h1>
                            <p class="mb-2 text-dark font-weight-bold">Le club part souvent aux États-unis, et organise des sorties au Mexique </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div id="img3" class="slider-container">
                        <div class="innerDiv">
                            <h1 class="mt-2 text-dark">Visites</h1>
                            <p class="mb-2 text-dark font-weight-bold">Nos sorties incluent des visites intéressantes</p>
                        </div>
                    </div>
                </Slide>
        </Carousel>
        <div class="text-center mt-4">
            <h1 class="text-white">À Propos du club</h1>
            <p class="text-white p-2 w-md-50 w-100 m-auto">
                Le Club BMW Montréal accueille les amoureux de voyages.<br>
                Chaque année, le groupe organise de nombreuses sorties, le tout dans une ambiance amicale et chaleureuse.
            </p>
        </div>
    </div>
</template>

<script>
    import Login from '../auth/login';
    import Register from '../auth/register';
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components : { Login, Register, Carousel, Slide },
    }
</script>
<style>
    #img1  {
        background-image:url("/images/banners/long-lake-1.jpg");
    }


    #img2 {
        background-image:url("/images/banners/long-lake-2.jpg");
    }

    #img3 {
        background-image: url("/images/banners/ottawa.jpg");
    }

    .slider-container {
        min-height: 600px;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size:cover;
    }

    .innerDiv {
        width: 50%;
        background-color: rgba(255, 255, 255, 0.86);
        text-align: center;
        border-radius:10px;
        padding:20px;
    }

    @media (max-width: 768px) {

        .slider-container {
            min-height:300px;
        }
    }
</style>

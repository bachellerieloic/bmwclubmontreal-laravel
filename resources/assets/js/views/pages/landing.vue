<template>
    <div>
        <Carousel :autoplay="true" :perPage="1">
                <Slide>
                    <div id="img1" class="slider-container">
                        <div class="innerDiv">
                            <h1 class="mt-2 text-dark"> {{ $t('content.banner1title')}} </h1>
                            <p class="mb-2 text-dark font-weight-bold"> {{ $t('content.banner1content')}} </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div id="img2" class="slider-container">
                        <div class="innerDiv alt">
                            <h1 class="mt-2 text-dark">{{ $t('content.banner2title')}}</h1>
                            <p class="mb-2 text-dark font-weight-bold">{{ $t('content.banner2content')}}</p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div id="img3" class="slider-container">
                        <div class="innerDiv">
                            <h1 class="mt-2 text-dark"> {{ $t('content.banner3title')}} </h1>
                            <p class="mb-2 text-dark font-weight-bold"> {{ $t('content.banner3content')}} </p>
                        </div>
                    </div>
                </Slide>
        </Carousel>

        <div class="text-center mt-4">
            <h1 class="text-white">{{ $t('content.about') }}</h1>
            <div class="row">
                <div class="col-10 col-lg-6 mx-auto">
                    <p class="text-white p-2 w-md-50 w-100 m-auto">{{ $t('content.aboutText') }}</p>
                </div>
            </div>
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
        min-height: 500px;
        max-width: 100vw;
        margin-left:0;
        margin-right:0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size:cover;
        background-position-y: center;
    }

    .innerDiv {
        width: 30%;
        background-color: rgba(255, 255, 255, 0.86);
        text-align: center;
        padding:20px;
    }

    @media (max-width: 768px) {
        .slider-container {
            min-height:300px;
        }

        .innerDiv {
            width: 75%;
            padding: 10px;
        }
    }
</style>
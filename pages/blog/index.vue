<script setup>
// const { public:{apiBase} } = useRuntimeConfig();
// const {data:articles} = await useFetch(`${apiBase}/articles`)
// console.log(articles.value.data)



</script>

<template>
    
    <section class="py-12 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            

                
                <div class="w-full flex justify-between flex-col lg:w-2/5">
                    <div class="block lg:text-right text-center">
                        <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">جدید ترین <span class=" text-blue-600">مقالات</span></h2>
                        <p class="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">به بخش وبلاگ ما خوش آمدید، جایی که دانش با الهام روبرو می شود. مقالات روشنگر، نکات تخصصی، و آخرین روندها در زمینه ما را کاوش کنید.</p>
                        <a href="#" class="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">مشاهده همه</a>
                    </div>
                     <!-- Slider controls -->
                     <!-- <div class="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                        <button id="slider-button-right" class="swiper-button-next group flex justify-center items-center border border-solid border-blue-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blue-600" data-carousel-next>
                            <svg class="h-6 w-6 text-blue-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                        </button>
                        <button id="slider-button-left" class="swiper-button-prev group flex justify-center items-center border border-solid border-blue-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blue-600" data-carousel-prev>
                            <svg class="h-6 w-6 text-blue-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                        </button>
                        
                    </div> -->
                </div>




                <div class="w-full lg:w-3/5">
                    <!--Slider wrapper-->
                    
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <SliderArticleSlider/>

                           

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
                                                                                   
</template>

<style>
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
            content: '' !important;
        }

        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
            content: '' !important;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
            width: 24px !important;
            height: 24px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: relative !important;
        }

        .swiper-slide.swiper-slide-active {
            --tw-border-opacity: 1 !important;
            border-color: rgb(79 70 229 / var(--tw-border-opacity)) !important;
        }

        .swiper-slide.swiper-slide-active>.swiper-slide-active\:text-blue-600 {
            --tw-text-opacity: 1;
            color: rgb(79 70 229 / var(--tw-text-opacity));
        }

        .swiper-slide.swiper-slide-active>.flex .grid .swiper-slide-active\:text-blue-600 {
            --tw-text-opacity: 1;
            color: rgb(79 70 229 / var(--tw-text-opacity));
        }
    </style>
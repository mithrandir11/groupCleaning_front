<script setup>
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import 'swiper/css/navigation';
const modules = [Navigation, Scrollbar, A11y, Autoplay];

const { public:{apiBase} } = useRuntimeConfig();
const {data:articles} = await useFetch(`${apiBase}/articles`)
</script>

<template>
    <div class=" relative w-full" >
      <swiper
      :modules="modules"
      :slides-per-view="1"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      :autoplay="true"
   
     
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="article in articles.data">
        <!-- <div class="w-full h-56 bg-red-400"></div> -->
        <div  class="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group ">
            <div class="flex items-center mb-9">
                <img :src="article.image" alt="blogs tailwind section" class="rounded-2xl w-full object-cover h-96">
            </div>
            <h3 class="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-blue-600">{{ article.title }}</h3>
            <p v-html="article.summary" class="text-gray-500 leading-6 transition-all duration-500 mb-8">
                
            </p>
            <NuxtLink :to="{name: 'showArticle', params:{'id':article.id, 'slug':article.slug}}" class="cursor-pointer flex items-center gap-2 text-lg text-blue-700 font-semibold">
                مطالعه بیشتر
                <svg class="rotate-180" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4338CA" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
        </div>
      </swiper-slide>
     

        <button class="custom-prev absolute left-0 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-70 text-primary-900 p-3 rounded-r-lg z-10">
            <svg class="h-5 w-5 fill-primary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </button>
        <button class="custom-next absolute right-0 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-70 text-primary-900 p-3 rounded-l-lg z-10">
            <svg class="h-5 w-5 fill-primary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </button>
    </swiper>
    </div>
</template>
    

  
  
    
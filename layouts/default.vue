<template>
    <Header/>
    <div class="px-1 lg:px-0 container mx-auto  ">
        
        <div class="py-36">
            <slot/>
        </div>

        <NuxtLink :to="{name: 'services'}" class="fixed bottom-10 left-5 bg-blue-500 border-4 border-blue-300 rounded-full text-white text-center px-6 py-2 text-sm shadow-lg">
            ثبت سفارش 
            <svg class="fill-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </NuxtLink >

        <Footer/>
    </div>
</template>
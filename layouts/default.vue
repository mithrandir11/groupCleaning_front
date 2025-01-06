<template>
    <div class=" px-1 container mx-auto  ">
        <Header/>
        <div class="py-12">
            <slot/>
        </div>

        <NuxtLink :to="{name: 'order'}" class="fixed bottom-10 left-5 bg-blue-500 rounded-full text-white text-center px-6 py-2 text-sm shadow-lg">ثبت سفارش +</NuxtLink >
    </div>
</template>
<script setup>
// const props = defineProps('')
const orderStore = useOrderStore();
</script>
<template>
    <div> <!-- //step8 -->
        <p class="font-bold text-xl mb-6">تماس کارشناسان با شما</p>

        <div class="flex justify-between items-center bg-blue-100 rounded-2xl p-6">
            <div class=" text-center">
                <div class="rounded-full p-3 bg-white inline-flex mb-6 ">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path class="fill-blue-400" d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z" />
                    </svg>
                </div>
                <p class="p-3 text-right rounded-2xl bg-white  text-gray-600 mb-6">کد سفارش <span class="font-bold text-black mx-2">{{ orderStore.orderCode }}</span> ثبت شده و کارشناسان در کوتاه ترین زمان با شما تماس خواهند گرفت.</p>
                <NuxtLink :to="{name: 'profile.services'}" class="px-3 py-2  shadow rounded-2xl bg-blue-500  text-white">مشاهده سفارشات</NuxtLink>
            </div>
            <img class="h-96" src="/images/customer-support-b.png" alt="">
        </div>
        
        

        <!-- <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button> -->
    </div>
</template>
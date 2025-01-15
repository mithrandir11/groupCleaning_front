<script setup>
const orderStore = useOrderStore();
</script>
<template>
    <div> <!-- //step3 -->
        <p class="font-bold text-xl mb-6">سایر توضیحات و درخواست‌ها</p>
        <textarea v-model="orderStore.orderData.extraDetails" rows="4" class="w-full p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg"></textarea>
        
        <div class="flex gap-x-3 justify-center mt-14">
            <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
            
            <button @click="orderStore.nextStep" type="button" class="bg-gray-600 hover:bg-gray-700 duration-200  px-8 py-2 text-sm rounded-lg text-white ">
                مرحله بعد
            </button>
        </div>
    </div>
</template>
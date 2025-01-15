<script setup>
const orderStore = useOrderStore();
const {data:addresses, refresh} = await useFetch('/api/profile/addresses', {
    headers: useRequestHeaders('cookie')
})
// console.log(addresses.value)
</script>
<template>
    <div> <!-- //step6 -->
        <p class="font-bold text-xl mb-6">آدرس خود را انتخاب کنید</p>
        <ProfileAddressCreate :refresh="refresh"/>

        <UtilsGeneralSelector
            v-model="orderStore.orderData.address"
            :items="addresses"
            :multiple="false"
            itemKey="full_address"
        />

        <div class="flex gap-x-3 justify-center mt-14">
            <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
            <button @click="orderStore.nextStep" :disabled="!orderStore.orderData.address" type="button" 
            :class="{
                'bg-gray-600 hover:bg-gray-700 duration-200': orderStore.orderData.address,
                'bg-gray-400 cursor-not-allowed': !orderStore.orderData.address,
            }" 
            class="  px-8 py-2 text-sm rounded-lg text-white ">
                مرحله بعد
            </button>
        </div>
        
    </div>
</template>
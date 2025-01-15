<script setup>
import { useOrderStore } from '~/stores/orderStore';

const route = useRoute();
const { public:{apiBase} } = useRuntimeConfig();
const {data:service} = await useFetch(`${apiBase}/services/${route.params.service}`)

const orderStore = useOrderStore();
const step = computed(()=> orderStore.step)

function gg(){
    console.log(orderStore.orderData)
}
</script>

<template>
   

        <div class="flex gap-x-16 lg:mx-32">
            <OrderStepper/>

            <div class="w-full">
                <!-- <p>{{ step }}</p> -->
                <OrderStepsServiceType v-if="step == 1" :service_id="service.data.id" :step="step"/>

                <LazyOrderStepsServiceOptions v-if="step == 2" :service_id="service.data.id" :step="step"/>

                <LazyOrderStepsExtraDetails v-if="step == 3"/>
                
                <LazyOrderStepsRequestedDateTime v-if="step == 4"/>
                
                <LazyOrderStepsContactNumber v-if="step == 5"/>

                <LazyOrderStepsAddressRegistration v-if="step == 6"/>

                <p v-if="step == 7">
                    <button @click="gg" type="button" class="bg-blue-400 p-3 rounded-lg text-white">ثبت سفارش</button>
                </p>

                <!-- <div class=" mt-14 text-center">
                    <button @click="orderStore.previousStep" v-if="step != 1" type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
                    <button @click="orderStore.nextStep" type="button" class="bg-gray-600 mr-3 hover:bg-gray-700 duration-200 px-8 py-2 text-sm rounded-lg text-white ">مرحله بعد</button>
                </div> -->

            </div>
        </div>
    
</template>
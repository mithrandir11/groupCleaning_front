<script setup>
import { useOrderStore } from '~/stores/orderStore';
const { public:{apiBase} } = useRuntimeConfig();
const route = useRoute();
const {data:service} = await useFetch(`${apiBase}/services/${route.params.service}`)
const orderStore = useOrderStore();
const step = computed(()=> orderStore.step)
</script>
<template>
   

        <div class="flex gap-x-16 lg:mx-32">
            <OrderStepper/>

            <div class="w-full">
                <!-- <p>{{ step }}</p> -->
                <OrderStepsServiceType v-if="step == 1" :service_id="service.data.id"/>

                <LazyOrderStepsServiceOptions v-if="step == 2" :service_id="service.data.id" :step="step"/>

                <LazyOrderStepsExtraDetails v-if="step == 3"/>
                
                <LazyOrderStepsRequestedDateTime v-if="step == 4"/>
                
                <LazyOrderStepsContactNumber v-if="step == 5"/>

                <LazyOrderStepsAddressRegistration v-if="step == 6"/>

                <LazyOrderStepsOrderStore v-if="step == 7"/>

            </div>
        </div>
    
</template>
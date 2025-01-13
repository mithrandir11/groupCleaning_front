<script setup>
import { useOrderStore } from '~/stores/orderStore';

const route = useRoute();
const { public:{apiBase} } = useRuntimeConfig();
const {data:service} = await useFetch(`${apiBase}/services/${route.params.service}`)

const orderStore = useOrderStore();
const step = computed(()=> orderStore.step)
</script>

<template>
   

        <div class="flex gap-x-16 ">
            <OrderStepper/>

            <div class="grow">
                <!-- <p>{{ step }}</p> -->
                <OrderStepsServiceType v-if="step == 1" :service_id="service.data.id" :step="step"/>

                <LazyOrderStepsServiceOptions v-if="step == 2" :service_id="service.data.id" :step="step"/>

                <div class="hidden"> <!-- //step3 -->
                    <p class="font-bold text-xl">سایر توضیحات و درخواست‌ها</p>

                    <div class="mt-6 ">
                        <textarea rows="4" class="w-full p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg"></textarea>
                        
                    </div>
                </div>

                <div class="hidden"> <!-- //step3 -->
                    <p class="font-bold text-xl">ورود شماره موبایل</p>

                    <div class="mt-6 ">
                        
                        
                        <div class="relative mb-6 w-72">
                            
                            <input type="text"  class="ltr w-full p-3 rounded-lg   text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg pl-10"/>
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <svg class="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            </div>
                            <!-- <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"> -->
                        </div> 

                        
                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" checked class="w-4 h-4 text-blue-600  border-gray-300 rounded  ">
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" class="text-blue-600  hover:underline ">شرایط و قوانین</a> موسسه را مطالعه نموده و می پذیرم.</label>
                        </div>

                    </div>
                </div>

                <!-- <div class=" mt-14 text-center">
                    <button @click="orderStore.previousStep" v-if="step != 1" type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
                    <button @click="orderStore.nextStep" type="button" class="bg-gray-600 mr-3 hover:bg-gray-700 duration-200 px-8 py-2 text-sm rounded-lg text-white ">مرحله بعد</button>
                </div> -->

            </div>
        </div>
    
</template>
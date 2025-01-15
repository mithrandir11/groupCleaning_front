<script setup>
const orderStore = useOrderStore();

const isOptionValid = computed(() => {
    const { number, isAcceptedTerms } = orderStore.orderData.contactNumber;
    return isAcceptedTerms && !!number; // اطمینان از مقدار صحیح برای شماره
});

const goToNextStep = () => {
    const { number } = orderStore.orderData.contactNumber;
    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(number)) {
        console.log("فرمت شماره موبایل معتبر نیست")
        return false;
    }else{
        orderStore.nextStep()
    }
};

</script>
<template>
    <div> <!-- //step5 -->
        <p class="font-bold text-xl mb-6">ارائه شماره تماس جهت هماهنگی</p>
        <div class="relative w-72 ">              
            <input v-model="orderStore.orderData.contactNumber.number" type="text"  class="ltr w-full p-3 rounded-lg   text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg pl-10"/>
            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                <svg class="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </div>
        </div> 

        <div class="flex items-center mb-72 mt-4">
            <input id="default-checkbox" type="checkbox" v-model="orderStore.orderData.contactNumber.isAcceptedTerms"  class="w-4 h-4">
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">شرایط و قوانین موسسه را مطالعه نموده و میپذیرم</label>
        </div>
       
        
        <div class="flex gap-x-3 justify-center mt-14">
            <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
            
            <button @click="goToNextStep"  :disabled="!isOptionValid" type="button" 
            :class="{
                'bg-gray-600 hover:bg-gray-700 duration-200': isOptionValid,
                'bg-gray-400 cursor-not-allowed': !isOptionValid
            }" 
            class="  px-8 py-2 text-sm rounded-lg text-white ">
                مرحله بعد
            </button>
        </div>
    </div>
</template>
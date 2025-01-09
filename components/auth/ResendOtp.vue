<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

const showResendOtp = ref(false)

async function handleResend() {
    try {
        await $fetch('/api/auth/resendOtp', {
            method: 'POST',
        })

        console.log('کد تایید دوباره ارسال شد')
        showResendOtp.value = false
    } catch (error) {
        console.log(error.data.data.message)
    }
}

function onCountdownEnd(){
    showResendOtp.value = true
}

function transformSlotProps(props) {
    const formattedProps = {};

    Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value);
    });

    return formattedProps;
}

</script>

<template>
   <ClientOnly>
    <div class="flex justify-between">
        <button @click="handleResend"  v-if="showResendOtp" type="button" class="text-sm text-gray-400 hover:text-blue-500 underline underline-offset-4">دریافت مجدد کد تایید</button>
        <div v-else class="text-sm text-gray-400 flex gap-x-2"> 
            <svg class="h-5 w-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            <vue-countdown :time="2 * 60 * 1000" :transform="transformSlotProps" @end="onCountdownEnd" v-slot="{ minutes, seconds }">
                <span class="text-blue-400">{{ seconds }} : {{ minutes }}</span>  دیگر تا ارسال مجدد کد تایید
            </vue-countdown>
            
        </div>
    </div>
   </ClientOnly>
</template>
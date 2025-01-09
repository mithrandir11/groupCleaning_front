<script setup>

const emit = defineEmits(['showCheckOtpForm'])

const isLoading = ref(false)

async function handleLogin(form) {
    // console.log(form)
    isLoading.value = true
    try {
        // auth.login(form)
        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: form
        })

        // console.log(data)
        console.log('کد ورود ارسال شد')
        emit('showCheckOtpForm')
    } catch (error) {
        console.log(error)
        // console.log(error.data.data.message)
    }finally{
        isLoading.value = false
    }
}
</script>

<template>
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        ورود | ثبت نام
    </h1>

    <FormKit type="form" @submit="handleLogin" :actions="false" :incomplete-message="false">
        <div class="space-y-4 md:space-y-6">

            <FormKit type="number" name="cellphone" id="cellphone" label="شماره موبایل" 
            label-class="block mb-2 text-sm font-medium text-gray-900 " 
            input-class="border border-gray-300 text-gray-900 rounded-lg outline-none focus:border-blue-600 block w-full p-2.5"
            :validation="[['required'], ['number'], ['matches', /^(\+98|0)?9\d{9}$/]]"
            :validation-messages="{required: 'فیلد شماره موبایل الزامی است', number: 'فیلد شماره موبایل باید عددی باشد', matches: 'فرمت شماره موبایل معتبر نیست'}"
            messages-class="text-red-500 text-sm"
            />
            
        
            <FormKit type="submit" :disabled="isLoading" input-class="flex w-full items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-sm px-5 py-2.5 text-center ">
                <UtilsLoading v-if="isLoading" class="ml-3"/>
            ورود
            </FormKit>
        </div>
    </FormKit>
</template>
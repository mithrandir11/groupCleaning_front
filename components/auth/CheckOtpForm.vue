<script setup>
import { useAuth } from '~/composables/useAuth'

const { authUser } = useAuth()

const isLoading = ref(false)

async function handleCheckOtp(form) {
    // console.log(form)
    isLoading.value = true
    try {
        // auth.login(form)
        const data = await $fetch('/api/auth/checkOtp', {
            method: 'POST',
            body: form
        })

        console.log(data)
        authUser.value = data
        return navigateTo('/')
        
    } catch (error) {
        // console.log(error.data.data)
        console.log(error.data.data.message)
    }finally{
        isLoading.value = false
    }
}
</script>

<template>
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        کد تایید را وارد کنید
    </h1>

    <FormKit type="form" @submit="handleCheckOtp" :actions="false" :incomplete-message="false">
        <div class="space-y-4 md:space-y-6">

            <FormKit type="number" name="otp" id="otp" label="کد تایید" 
            label-class="block mb-2 text-sm font-medium text-gray-900 " 
            input-class="border border-gray-300 text-gray-900 rounded-lg outline-none focus:border-blue-600 block w-full p-2.5"
            :validation="[['required'], ['number'], ['matches', /[0-9]/]]"
            :validation-messages="{required: 'فیلد کد تایید الزامی است', number: 'فیلد کد تایید باید عددی باشد', matches: 'فرمت کد تایید معتبر نیست'}"
            messages-class="text-red-500 text-sm"
            />

            <AuthResendOtp/>
            
        
            <FormKit type="submit" input-class="flex w-full items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-sm px-5 py-2.5 text-center ">
                <UtilsLoading v-if="isLoading" class="ml-3"/>
                تایید
            </FormKit>
        </div>
    </FormKit>
</template>
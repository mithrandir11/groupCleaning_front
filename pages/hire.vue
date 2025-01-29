<script setup>
import { reset } from '@formkit/core';


const isLoading = ref(false)

async function handleStore(form) {
    console.log(form)
    isLoading.value = true
    try {
        await $fetch('/api/resume/store', {
            method: 'POST',
            body: form
        })
        push.success('رزومه شما با موفقیت ثبت شد.')
        reset('storeResume');
        // console.log(data)
    } catch (error) {
        push.error(error.data.data.message)
        // console.log(error)
        // console.log(error.data.data.message)
    }finally{
        isLoading.value = false
    }
}
</script>

<template>
    <div class="">
        <FormKit type="form" @submit="handleStore" id="storeResume" :actions="false" :incomplete-message="false">
            <div class="grid grid-cols-2 gap-8 ">

                <FormKit
                type="text"
                name="name"
                label="نام"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required']]"
                :validation-messages="{ required: 'فیلد نام الزامی است' }"
                messages-class="text-red-500 text-sm"
                />

                <!-- نام‌خانوادگی -->
                <FormKit
                type="text"
                name="family"
                label="نام‌خانوادگی"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required']]"
                :validation-messages="{ required: 'فیلد نام‌خانوادگی الزامی است' }"
                messages-class="text-red-500 text-sm"
                />

                <!-- شماره موبایل -->
                <FormKit
                type="text"
                name="cellphone"
                label="شماره موبایل"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required'], ['matches', /^(\+98|0)?9\d{9}$/]]"
                :validation-messages="{
                    required: 'فیلد شماره موبایل الزامی است',
                    matches: 'فرمت شماره موبایل معتبر نیست',
                }"
                messages-class="text-red-500 text-sm"
                />

                <!-- نام پدر -->
                <FormKit
                type="text"
                name="father_name"
                label="نام پدر"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required']]"
                :validation-messages="{ required: 'فیلد نام پدر الزامی است' }"
                messages-class="text-red-500 text-sm"
                />

                <!-- کد ملی -->
                <FormKit
                type="text"
                name="national_code"
                label="کد ملی"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required'], ['matches', /^\d{10}$/]]"
                :validation-messages="{
                    required: 'فیلد کد ملی الزامی است',
                    matches: 'فرمت کد ملی معتبر نیست',
                }"
                messages-class="text-red-500 text-sm"
                />

                <!-- شماره تلفن ثابت -->
                <FormKit
                type="text"
                name="phone"
                label="شماره تلفن ثابت"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required'], ['matches', /^0\d{10}$/]]"
                :validation-messages="{
                    required: 'فیلد شماره تلفن ثابت الزامی است',
                    matches: 'فرمت شماره تلفن ثابت معتبر نیست',
                }"
                messages-class="text-red-500 text-sm"
                />

                <!-- ایمیل -->
                <FormKit
                type="email"
                name="email"
                label="ایمیل"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required'], ['email']]"
                :validation-messages="{
                    required: 'فیلد ایمیل الزامی است',
                    email: 'فرمت ایمیل معتبر نیست',
                }"
                messages-class="text-red-500 text-sm"
                />

                <!-- نام بانک -->
                <FormKit
                type="text"
                name="bank_name"
                label="نام بانک"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required']]"
                :validation-messages="{ required: 'فیلد نام بانک الزامی است' }"
                messages-class="text-red-500 text-sm"
                />

                <!-- شماره شبا -->
                <FormKit
                type="text"
                name="sheba_number"
                label="شماره شبا"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                
                :validation="[['required']]"
                :validation-messages="{
                    required: 'فیلد شماره شبا الزامی است',
                    
                }"
                messages-class="text-red-500 text-sm"
                />

                <!-- آدرس محل سکونت -->
                <FormKit
                type="textarea"
                name="address"
                label="آدرس محل سکونت"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :validation="[['required']]"
                :validation-messages="{ required: 'فیلد آدرس الزامی است' }"
                messages-class="text-red-500 text-sm"
                />

                <!-- همکاری با دیگر شرکت‌ها -->
                <FormKit
                type="text"
                name="cooperation_with_other_company"
                label="همکاری با دیگر شرکت‌ها"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                />

                <!-- سابقه کاری -->
                <FormKit
                type="textarea"
                name="work_experience"
                label="سابقه کاری"
                label-class="block mb-2 text-sm font-medium text-gray-900"
                input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                />

                <!-- دکمه ارسال -->
                <FormKit type="submit" :disabled="isLoading" input-class="flex  items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-sm px-5 py-2.5 text-center ">
                    <UtilsLoading v-if="isLoading" class="ml-3"/>
                    ثبت رزومه
                </FormKit>

                

            </div>
        </FormKit>
    </div>
</template>

<!-- :validation="[['required'], ['matches', /^IR\d{24}$/]]" -->
<!-- matches: 'فرمت شماره شبا معتبر نیست', -->
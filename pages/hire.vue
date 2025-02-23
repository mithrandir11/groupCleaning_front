<script setup>
const { public: { apiBase } } = useRuntimeConfig();
const isLoading = ref(false)
import { reset } from '@formkit/core';


const personalImage = ref()
const identityCard = ref()
const residenceDocument = ref()


async function create(data) {
    isLoading.value = true
  
    const formData = new FormData()
    formData.append('personal_image', personalImage.value)
    formData.append('national_card_image', identityCard.value)
    formData.append('residence_document_image', residenceDocument.value)

    formData.append('name', data.name)
    formData.append('family', data.family)
    formData.append('cellphone', data.cellphone)
    formData.append('phone', data.phone)
    formData.append('father_name', data.father_name)
    formData.append('national_code', data.national_code)
    formData.append('email', data.email)
    formData.append('bank_name', data.bank_name)
    formData.append('sheba_number', data.sheba_number)
    formData.append('address', data.address)
    formData.append('cooperation_with_other_company', data.cooperation_with_other_company)
    formData.append('work_experience', data.work_experience)
 

    try {
        const res = await $fetch(`${apiBase}/resume/store`, {
            method: 'POST',
            body: formData,
            headers: {
                    'Accept': 'application/json',
            }
        })

        push.success('رزومه شما با موفقیت ثبت شد.')
        // console.log('sdf')
        return navigateTo('/');
        // personalImage.value = null
        // identityCard.value = null
        // residenceDocument.value = null
        // reset('storeResume');
        
    } catch (error) {
      push.error(error.data.message)
      
    }finally{
        isLoading.value = false
    }
    

}

</script>

<template>
   <ClientOnly fallback-tag="span" fallback="در حال بارگذاری ...">
    <FormKit type="form" @submit="create" id="storeResume" :incomplete-message="false" :actions="false">
        <!-- <div class="row gy-4"> -->

            

        <!-- </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
         

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
          label="شماره تلفن ثابت (با کد استان)" 
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
          label="شماره شبا (بدون IR)"
          label-class="block mb-2 text-sm font-medium text-gray-900"
          input-class="max-w-sm text-gray-700 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 block w-full p-3"
          
          :validation="[['required'], ['length', 16]]"
          :validation-messages="{
              required: 'فیلد شماره شبا الزامی است',
              length: 'شماره شبا باید دقیقاً ۱۶ کاراکتر باشد'
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


          <HirePersonalImage @set-personal-image="(image) => personalImage = image" />
          <HireIdentityCard @set-identity-card="(image) => identityCard = image"/>
          <HireResidenceDocumentImage @set-residence-document="(image) => residenceDocument = image"/> 

         

        </div>

        


        <FormKit type="submit" :disabled="isLoading" input-class="flex  mt-12 items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-sm px-5 py-2.5 text-center ">
            <UtilsLoading v-if="isLoading" class="ml-3"/>
            ثبت رزومه
        </FormKit>
    </FormKit>
  </ClientOnly>
    
</template>

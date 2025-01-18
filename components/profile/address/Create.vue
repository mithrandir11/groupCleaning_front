<script setup>
import { reset } from '@formkit/core';

const props = defineProps(['refresh'])
const showCreateAddressForm = ref(false)
const isLoading = ref(false)

async function handleCreate(form) {
    // console.log(form)
    isLoading.value = true

    try {
        await $fetch('/api/profile/addresses/create',{
            method: 'POST',
            body: form
        })
        // push.success('آدرس شما با موفقیت ایجاد شد')
        reset('createAddress');
        props.refresh()
    } catch (error) {
        console.log(error.data.data.message)
        
    }finally{
        isLoading.value = false
    }
    
}
</script>
<template>
    <div >
        <button @click="showCreateAddressForm = !showCreateAddressForm" type="button" class=" border rounded-lg px-3 py-1 border-blue-300 pb-1 text-blue-500 font-bold  text-sm  block mr-auto">ایجاد آدرس جدید +</button>

        <FormKit v-if="showCreateAddressForm" id="createAddress" type="form" @submit="handleCreate" :actions="false" :incomplete-message="false" >
            <div  class="grid grid-cols-2 gap-6" >

            

            

                <FormKit type="text" name="state" id="state" label="استان" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                validation="required"
                :validation-messages="{required: 'فیلد استان الزامی است'}"
                messages-class="text-red-500 text-sm"
                />

                <FormKit type="text" name="city" id="city" label="شهر" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                validation="required"
                :validation-messages="{required: 'فیلد شهر الزامی است'}"
                messages-class="text-red-500 text-sm"
                />

                <!-- <FormKit type="text" name="postal_code" id="postal_code" label="کدپستی" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                validation="required"
                :validation-messages="{required: 'فیلد کدپستی الزامی است'}"
                messages-class="text-red-500 text-sm"
                /> -->

                
                <div class="col-span-full">
                    <FormKit type="textarea" name="full_address" id="full_address" label="آدرس کامل" 
                    label-class="block mb-2 text-sm font-medium text-gray-900 " 
                    input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    validation="required"
                    :validation-messages="{required: 'فیلد آدرس کامل الزامی است'}"
                    messages-class="text-red-500 text-sm"
                    />
                </div>

                


                <FormKit type="submit" input-class="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-xs px-3 py-2 text-center ">
                    <UtilsLoading v-if="isLoading" class="ml-3"/>
                    ایجاد آدرس
                </FormKit>
            </div>
        </FormKit>
    </div>
</template>
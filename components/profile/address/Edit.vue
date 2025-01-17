<script setup>
const props = defineProps(['address','refresh'])
const emit = defineEmits(['close']);

const isLoading = ref(false)

async function handleUpdate(form) {
    // console.log(form)
    isLoading.value = true

    try {
        await $fetch('/api/profile/addresses/edit',{
            method: 'POST',
            body: {...form, id:props.address.id}
        })
        props.refresh()
        emit('close');
        // push.success('آدرس شما با موفقیت ایجاد شد')
    } catch (error) {
        console.log(error.data.data.message)
        
    }finally{
        isLoading.value = false
    }
    
}
</script>

<template>
  
    <FormKit type="form" @submit="handleUpdate" :actions="false" :incomplete-message="false" >
        <div  class="grid grid-cols-2 gap-6" >

            <FormKit type="text" name="state" id="state" label="استان" 
            label-class="block mb-2 text-sm font-medium text-gray-900 " 
            input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            :value="props.address.state"
            validation="required"
            :validation-messages="{required: 'فیلد استان الزامی است'}"
            messages-class="text-red-500 text-sm"
            />

            <FormKit type="text" name="city" id="city" label="شهر" 
            label-class="block mb-2 text-sm font-medium text-gray-900 " 
            input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            :value="props.address.city"
            validation="required"
            :validation-messages="{required: 'فیلد شهر الزامی است'}"
            messages-class="text-red-500 text-sm"
            />

            
            <div class="col-span-full">
                <FormKit type="textarea" name="full_address" id="full_address" label="آدرس کامل" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                :value="props.address.full_address"
                validation="required"
                :validation-messages="{required: 'فیلد آدرس کامل الزامی است'}"
                messages-class="text-red-500 text-sm"
                />
            </div>

            


            <FormKit type="submit" input-class="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-xs px-3 py-2 text-center ">
                <UtilsLoading v-if="isLoading" class="ml-3"/>
                ویرایش آدرس
            </FormKit>
        </div>
    </FormKit>
   
</template>
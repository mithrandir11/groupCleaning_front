<script setup>
const {data:user} = await useFetch('/api/auth/me', {
    headers: useRequestHeaders(['cookie'])
})

const isLoading = ref(false)

async function handleUpdate(form) {
    console.log(form)
    isLoading.value = true
    try {
        const data = await $fetch('/api/profile/info/edit',{
            method: 'PUT',
            body: form
        })

        // console.log(data)
        push.success('اطلاعات شما با موفقیت بروزرسانی شد')
    } catch (error) {
        console.log(error.data.data.message)
        
    }finally{
        isLoading.value = false
    }
    
}

// console.log(user.value)
</script>
<template>
    <div class="grow">

        <FormKit type="form" @submit="handleUpdate" :incomplete-message="false" :actions="false">
            <div class="space-y-8">
                <FormKit type="text" name="name" id="name" label="نام" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="max-w-sm text-gray-500 text-sm border border-gray-300  rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :value="user.name"
                validation="required"
                :validation-messages="{required: 'فیلد نام الزامی است'}"
                messages-class="text-red-500 text-sm"
                />

                <FormKit type="text" name="family" id="family" label="نام‌خانوادگی" 
                label-class="block mb-2 text-sm font-medium text-gray-900 " 
                input-class="max-w-sm text-gray-500 text-sm border border-gray-300  rounded-lg outline-none focus:border-blue-500 block w-full p-3"
                :value="user.family"
                validation="required"
                :validation-messages="{required: 'فیلد نام‌خانوادگی الزامی است'}"
                messages-class="text-red-500 text-sm"
                />

                <div class="max-w-sm">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">شماره موبایل</label>
                    <input :value="user.cellphone" type="text" id="default-input" disabled class="border disabled border-gray-300 text-gray-900 text-sm rounded-lg outline-none  focus:border-blue-500 block w-full p-3">
                </div>

                <FormKit type="submit" input-class="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 duration-200 rounded-lg text-sm px-4 py-2 ">
                    <UtilsLoading v-if="isLoading" class="ml-3"/>
                    ذخیره تغییرات   
                </FormKit>
            </div>
        </FormKit>
       
    </div>
</template>
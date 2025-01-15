<script setup>
const orderStore = useOrderStore();
const isLoading = ref(false)

async function handleStore() {

    isLoading.value = true

    try {
        const data = await $fetch('/api/order/create',{
            method: 'POST',
            body: orderStore.orderData
        })
        // push.success('آدرس شما با موفقیت ایجاد شد')

        console.log(data)
        
    } catch (error) {
        console.log(error.data.data.message)
        
    }finally{
        isLoading.value = false
    }
    
}
</script>
<template>
    <button @click="handleStore" type="button" class="bg-blue-400 p-3 rounded-lg text-white">ثبت سفارش</button>
</template>
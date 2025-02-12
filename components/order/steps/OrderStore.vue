<script setup>
const orderStore = useOrderStore();
const isLoading = ref(false)

async function handleStore() {
    console.log(orderStore.orderData)

    isLoading.value = true

    try {
        const data = await $fetch('/api/order/create',{
            method: 'POST',
            body: orderStore.orderData
        })
        orderStore.orderCode = data.order_code
        push.success('سفارش شما با موفقیت ثبت شد')
        return orderStore.nextStep()
        // console.log(orderStore.orderCode)
        
    } catch (error) {
        console.log(error.data.data.message)
        
    }finally{
        isLoading.value = false
    }
    
}


</script>
<template>
    <div> <!-- //step3 -->
        <p class="font-bold text-xl mb-6">بازبینی و ثبت نهایی سفارش</p>

       <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">خدمت</h3>
            <div  class="bg-white p-3 rounded-md">{{ orderStore.orderData.service }}</div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">نوع خدمت</h3>
            <div  class="bg-white p-3 rounded-md">{{ orderStore.orderData.serviceType }}</div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">گزینه های خدمت</h3>
          
            <div v-for="(subValue, subKey) in orderStore.orderData.serviceOptions" :key="subKey" class="bg-white p-3 mt-2 rounded-md">
                <strong>{{ subKey }} : </strong>
                <span v-if="Array.isArray(subValue)">
                    <!-- اگر مقدار یک آرایه باشد، از v-for برای نمایش عناصر استفاده می‌کنیم -->
                    <ul class="list-none mt-2 space-y-1 pr-3">
                        <li v-for="(item, index) in subValue" :key="index">{{ item }}</li>
                    </ul>
                </span>
                <span v-else-if="typeof subValue === 'object'">
                    <!-- اگر مقدار یک شیء باشد، می‌توانید آن را به صورت مناسب فراخوانی کنید -->
                    <pre>{{ JSON.stringify(subValue, null, 2) }}</pre>
                </span>
                <span v-else>
                    <!-- اگر مقدار یک رشته یا عدد باشد، آن را به صورت ساده نمایش می‌دهیم -->
                    {{ subValue }}
                </span>
            </div>
           
            <!-- <div  class="bg-white p-3 rounded-md">ی</div> -->
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">توضیحات</h3>
            <div  class="bg-white p-3 rounded-md">{{ orderStore.orderData.extraDetails }}</div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">تاریخ و زمان انتخاب شده</h3>
            <div  class="bg-white p-3 rounded-md"><strong>تاریخ : </strong>  {{ orderStore.orderData.selectedDateTime.date }}</div>
            <div  class="bg-white p-3 rounded-md mt-2"><strong>ساعت : </strong>  {{ orderStore.orderData.selectedDateTime.time }}</div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">شماره تماس</h3>
            <div  class="bg-white p-3 rounded-md">{{ orderStore.orderData.contactNumber.number }}</div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">آدرس</h3>
            <div  class="bg-white p-3 rounded-md">{{ orderStore.orderData.address.full_address }}</div>
        </div>
       </div>

        

        <div class="flex gap-x-3 justify-center mt-14">
            <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
            
            <button @click="handleStore" type="button" class="bg-gray-600 hover:bg-gray-700 duration-200  px-8 py-2 text-sm rounded-lg text-white ">
                ثبت نهایی سفارش
            </button>
        </div>
       
    </div>
    
</template>
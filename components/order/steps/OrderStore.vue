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

const translations = {
  serviceType: 'نوع خدمت',
  serviceOptions: 'گزینه‌های خدمات',
  extraDetails: 'جزئیات اضافی',
  selectedDateTime: 'تاریخ و زمان انتخاب‌شده',
  contactNumber: 'شماره تماس',
  address: 'آدرس',
  date: 'تاریخ',
  time: 'زمان',
  number: 'شماره',
  isAcceptedTerms: 'قوانین را پذیرفته‌ام',
  full_address: 'آدرس کامل',
  state: 'استان',
  city: 'شهر',
};

const excludedKeys = ['isAcceptedTerms', 'id']; // فیلدهایی که نباید نمایش داده شوند

const translateKey = (key) => translations[key] || key;

const isExcludedKey = (key) => excludedKeys.includes(key);

const filteredOrderData = computed(() => {
  const filteredData = { ...orderStore.orderData };

  // حذف فیلدهای نامطلوب از آدرس
  if (filteredData.address) {
    const { id, ...restAddress } = filteredData.address;
    filteredData.address = restAddress;
  }

  // حذف فیلدهای نامطلوب از contactNumber
  if (filteredData.contactNumber) {
    const { isAcceptedTerms, ...restContactNumber } = filteredData.contactNumber;
    filteredData.contactNumber = restContactNumber;
  }

  return filteredData;
});
</script>
<template>
    <div> <!-- //step3 -->
        <p class="font-bold text-xl mb-6">بازبینی و ثبت نهایی سفارش</p>

        
        <div class="space-y-4">
            <div v-for="(value, key) in filteredOrderData" :key="key" class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">{{ translateKey(key) }}</h3>
            <div v-if="typeof value === 'object' && !Array.isArray(value)" class=" space-y-2">
                <div v-for="(subValue, subKey) in value" :key="subKey" class="bg-white p-3 rounded-md">
                <template v-if="!isExcludedKey(subKey)">
                    <strong>{{ translateKey(subKey) }} : </strong>
                    <span v-if="typeof subValue === 'object'">
                    <pre>{{ JSON.stringify(subValue, null, 2) }}</pre>
                    </span>
                    <span v-else>{{ subValue }}</span>
                </template>
                </div>
            </div>
            <div v-else class="bg-white p-3 rounded-md">
                {{ value }}
            </div>
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
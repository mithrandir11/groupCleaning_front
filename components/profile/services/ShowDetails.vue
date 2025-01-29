<script setup>
const {order} = defineProps(['order'])

const translations = {
    order_code: 'کد سفارش',
    status: 'وضعیت',
    service_type: 'نوع خدمت',
    service_options: 'گزینه‌های خدمات',
    extra_details: 'جزئیات اضافی',
    selectedDateTime: 'تاریخ و زمان انتخاب‌شده',
    contact_number: 'شماره تماس',
    address: 'آدرس',
    selected_date: 'تاریخ',
    selected_time: 'زمان',
    number: 'شماره',
    isAcceptedTerms: 'قوانین را پذیرفته‌ام',
    full_address: 'آدرس کامل',
    state: 'استان',
    city: 'شهر',

    pending: 'در انتظار بررسی',
    total_amount: 'هزینه خدمات'
};
const translateKey = (key) => translations[key] || key;

const excludedKeys = ['user_id', 'id'];
const isExcludedKey = (key) => excludedKeys.includes(key);




</script>
<template>
   
     <ul class="text-right">
      <template v-for="(value, key) in order" :key="key" >
        <li v-if="typeof value !== 'object'"  class="mb-4">
            <template v-if="!isExcludedKey(key)">
                <span class="font-semibold"  >{{ translateKey(key) }} : </span> {{ translateKey(value) }}
            </template>
        </li>

        <li v-else class="mb-4">
          <span class="font-semibold" >{{ translateKey(key) }} : </span>
          <ul class="mr-2  pr-2 mt-1">
            <li v-for="(subValue, subKey) in value" :key="subKey" class="mb-1" >
              <span class="font-medium" >{{ translateKey(subKey) }}:</span> {{ subValue }}
            </li>
          </ul>
        </li>

      </template>
    </ul> 
</template>
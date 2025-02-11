<script setup>
const {order} = defineProps(['order'])



const excludedKeys = ['user_id', 'id'];
const isExcludedKey = (key) => excludedKeys.includes(key);

// console.log(order)

const { getStatusClass } = useStatus()
</script>
<template>

  <div class="flex justify-between  gap-x-3  ">
    <div class="space-y-3 text-sm">
      <p>هزینه سفارش شما معادل {{ order.total_amount }} تومان میباشد. </p>
      <p>نسبت به آماده سازی ابزار مورد نیاز نظافت اقدام کنید </p>
      <p>لطفا پس از اتمام کار وجه فاکتور به متخصص پرداخت گردد. </p>
    </div>
    <NuxtLink :to="{name: 'profile.services'}" class="self-start flex items-center gap-x-2 border duration-200 rounded-lg text-sm px-4 py-2 ">
        بارگشت
        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M3.57813 12.4981C3.5777 12.6905 3.65086 12.8831 3.79761 13.0299L9.7936 19.0301C10.0864 19.3231 10.5613 19.3233 10.8543 19.0305C11.1473 18.7377 11.1474 18.2629 10.8546 17.9699L6.13418 13.2461L20.3295 13.2461C20.7437 13.2461 21.0795 12.9103 21.0795 12.4961C21.0795 12.0819 20.7437 11.7461 20.3295 11.7461L6.14168 11.7461L10.8546 7.03016C11.1474 6.73718 11.1473 6.2623 10.8543 5.9695C10.5613 5.6767 10.0864 5.67685 9.79362 5.96984L3.84392 11.9233C3.68134 12.0609 3.57812 12.2664 3.57812 12.4961L3.57813 12.4981Z" fill="#343C54"/>
        </svg>
    </NuxtLink>
  </div>

 
   
  <div class="grid grid-cols-4 border  divide-x divide-x-reverse rounded-t-lg text-center mt-8">
    <div class=" p-3">
      <p class="mb-2 font-semibold">وضعیت سفارش</p>
      <p :class="getStatusClass(order.status)">{{ order.status_fa }}</p>
    </div>

    <div class=" p-3">
      <p class="mb-2 font-semibold">کد سفارش</p>
      <p>{{ order.order_code }}</p>
    </div>

    <div class=" p-3">
      <p class="mb-2 font-semibold">کد متخصص</p>
      <p>{{ order.workers?.join(' - ') }}</p>
    </div>

    <div class=" p-3">
      <p class="mb-2 font-semibold">هزینه خدمات</p>
      <p>{{ order.total_amount }} تومان</p>
    </div>
  </div>

  <div class="border border-y-0  px-6 py-4">
    <ul class="text-right">
      <!-- <p class="text-blue-500 font-bold text-base my-4">توضیحات مشتری</p> -->

      <li class="mb-4">
            <span class="font-semibold"  >خدمت : </span> {{ order.service }}
      </li>

      <li class="mb-4">
            <span class="font-semibold"  >نوع خدمت : </span> {{ order.service_type }}
      </li>

      

      <template v-for="(value, key) in order.service_options" :key="key" >
        <li v-if="typeof value !== 'object'"  class="mb-4">
            <template v-if="!isExcludedKey(key)">
                <span class="font-semibold"  >{{ key }} : </span> {{ value }}
            </template>
        </li>

        <li v-else class="mb-4">
          <span class="font-semibold" >{{ key }} : </span>
          <ul class="mr-2  pr-2 mt-1">
            <li v-for="(subValue, subKey) in value" :key="subKey" class="mb-1" >
              {{ subValue }}
            </li>
          </ul>
        </li>

      </template>

      <li class="mb-4">
            <span class="font-semibold"  >آدرس : </span> {{ order.address }}
      </li>

      <li class="mb-4">
        <span class="font-semibold"  >توضیحات تکمیلی : </span> {{ order.extra_details }}
      </li>

      <li class="mb-4">
        <span class="font-semibold"  >شماره تماس : </span> {{ order.contact_number }}
      </li>

    </ul> 


  </div>

  <div class="grid grid-cols-2 divide-x divide-x-reverse border  rounded-b-lg">
    <div class=" p-3">
      <p class="mb-2 font-semibold">تاریخ ثبت سفارش مشتری</p>
      <p>{{ order.created_at }}</p>
    </div>

    <div class=" p-3">
      <p class="mb-2 font-semibold">زمان و تاریخ درخواستی</p>
      <p>{{ order.selected_date }} - {{ order.selected_time }}</p>
    </div>
  </div>
     
</template>
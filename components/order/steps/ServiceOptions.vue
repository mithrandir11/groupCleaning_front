<script setup>
const { public:{apiBase} } = useRuntimeConfig();
const props = defineProps(['service_id','step'])
const orderStore = useOrderStore();
const subStep = computed(()=> orderStore.subStep)

const serviceOptions = ref([])
onMounted(async () => {
  try {
    serviceOptions.value = await $fetch(`${apiBase}/service_options/${props.service_id}`);
    orderStore.setMaxSubSteps(props.step, serviceOptions.value.data.length);
  } catch (error) {
    console.error('Error fetching service options:', error);
  }
});

const isOptionValid = (serviceOption) => {
  if (serviceOption.is_required) {
    return !!orderStore.orderData.serviceOptions[serviceOption.title];
  }
  return true;
};
</script>

<template>
    <div class="space-y-16 "> <!-- //step2 service options -->
       
        <template v-for="(serviceOption, index) in serviceOptions.data" :key="serviceOption.id">
            <div  v-if="subStep === index + 1">
                <div class="flex justify-between mb-6">
                    <p class="font-bold text-xl ">{{ serviceOption.title }}</p>
                    <p v-if="serviceOption.is_required" class="bg-red-500 rounded-full px-2 py-1 text-xs text-white">پاسخ الزامی میباشد</p>
                </div>
                <UtilsGeneralSelector
                v-model="orderStore.orderData.serviceOptions[serviceOption.title]"
                :items="serviceOption.values.map(value => value.title)"
                :multiple="serviceOption.is_multiple"
                />

                <div class="flex gap-x-3 justify-center mt-14">
                    <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>

                    <button @click="orderStore.nextStep"  :disabled="!isOptionValid(serviceOption)" type="button" 
                    :class="{
                        'bg-gray-600 hover:bg-gray-700 duration-200': isOptionValid(serviceOption),
                        'bg-gray-400 cursor-not-allowed': !isOptionValid(serviceOption)
                    }" 
                    class="  px-8 py-2 text-sm rounded-lg text-white ">
                        مرحله بعد
                    </button>
                </div>

            </div>
        </template>
            
        
       

        






       
        <!--<div>
            <p class="font-bold text-xl">برآورد از زمان مورد نیاز</p>
            <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                <option selected>4 ساعت</option>
                <option value="US">5 ساعت</option>
                <option value="CA">6 ساعت</option>
                <option value="FR">7 ساعت</option>
                <option value="DE">8 ساعت</option>
                <option value="DE">9 ساعت</option>
                <option value="DE">10 ساعت</option>
            </select>
        </div>

        <div>
            <p class="font-bold text-xl">متراژ فضا</p>
            <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                <option selected>کمتر از 50 متر</option>
                <option value="US">50 تا 70 متر</option>
                <option value="US">70 تا 90 متر</option>
                <option value="US">90 تا 130 متر</option>
                <option value="US">بیشتر از 130 متر</option>
            </select>
        </div>

        <div>
            <p class="font-bold text-xl">خدمات تکمیلی</p>
            <div class="mt-6 grid grid-cols-4 gap-4">
                <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">باز و نصب کردن پرده</div>
                <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">اتوکشی پرده</div>
                <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شامپو فرش و مبل</div>
                <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">لوستر</div>
                <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شستن فرش</div>
            </div>
        </div>

        <div>
            <p class="font-bold text-xl">تعداد نیروی موردنیاز</p>
            <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                <option selected>1 نفر</option>
                <option value="US">2 نفر</option>
                <option value="US">3 نفر</option>
                <option value="US">4 نفر</option>
                <option value="US">5 نفر</option>
            </select>
        </div>

        <div>
            <p class="font-bold text-xl">حیوان خانگی دارید؟</p>
            <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                <option selected>خیر</option>
                <option value="US">بله</option>
            </select>
        </div> -->

        <!-- <div>
            <p class="font-bold text-xl">تاریخ و ساعت درخواستی</p>   
            <date-picker type="datetime" min="1403/10/16" />
        </div> -->


    </div>
</template>
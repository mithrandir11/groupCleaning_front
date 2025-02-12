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
    // console.error('Error fetching service options:', error);
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
    <div class="space-y-16 " v-if="serviceOptions.data"> <!-- //step2 service options -->
       
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
            
        
       

        






       
       

        <!-- <div>
            <p class="font-bold text-xl">تاریخ و ساعت درخواستی</p>   
            <date-picker type="datetime" min="1403/10/16" />
        </div> -->


    </div>
</template>
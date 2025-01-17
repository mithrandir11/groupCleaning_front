<script setup>
const { public:{apiBase} } = useRuntimeConfig();
const props = defineProps(['service_id'])
const {data:service_type} = await useFetch(`${apiBase}/service_type/${props.service_id}`)
const orderStore = useOrderStore();

const isSelected = computed(() => !!orderStore.orderData.serviceType);
</script>

<template>
     <!-- //step1 type of service -->
        <div>
            <div class="flex justify-between mb-6">
                <p class="font-bold text-xl ">{{ service_type.data.title }}</p>
                <p class="bg-red-500 rounded-full px-2 py-1 text-xs text-white">پاسخ الزامی میباشد</p>
            </div>
            <UtilsGeneralSelector
            v-model="orderStore.orderData.serviceType"
            :items="service_type.data.values"
            />

            <div class="flex gap-x-3 justify-center mt-14">
                <button @click="orderStore.nextStep" :disabled="!isSelected" type="button" 
                :class="{'bg-gray-600 hover:bg-gray-700 duration-200': isSelected,'bg-gray-400 cursor-not-allowed': !isSelected,}" 
                class="  px-8 py-2 text-sm rounded-lg text-white ">
                    مرحله بعد
                </button>
            </div>
        </div>

</template>
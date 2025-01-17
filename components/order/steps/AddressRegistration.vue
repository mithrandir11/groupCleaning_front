<script setup>
const orderStore = useOrderStore();
const { data: addresses, refresh } = await useFetch("/api/profile/addresses", {
  headers: useRequestHeaders("cookie"),
});

const { authUser } = useAuth();
const showCheckOtpForm = ref(false)
</script>

<template>
  <div>
    <!-- //step6 -->

    <div v-if="authUser">
      <p class="font-bold text-xl mb-6">آدرس خود را انتخاب کنید</p>
      <ProfileAddressCreate :refresh="refresh" />

      <template v-if="addresses && addresses.length > 0">
        <UtilsGeneralSelector
          v-model="orderStore.orderData.address"
          :items="addresses"
          :multiple="false"
          itemKey="full_address"
        />
      </template>

        <div class="flex gap-x-3 justify-center mt-14">
            <button
                @click="orderStore.previousStep"
                type="button"
                class="border border-gray-600 px-8 py-2 text-sm rounded-lg"
            >
                مرحله قبل
            </button>
            <button
                @click="orderStore.nextStep"
                :disabled="!orderStore.orderData.address"
                type="button"
                :class="{
                'bg-gray-600 hover:bg-gray-700 duration-200':
                    orderStore.orderData.address,
                'bg-gray-400 cursor-not-allowed': !orderStore.orderData.address,
                }"
                class="px-8 py-2 text-sm rounded-lg text-white"
            >
                مرحله بعد
            </button>
        </div>
    </div>

    <div v-else>
      <p class="font-bold text-xl mb-6">برای انتخاب آدرس لطفا ابتدا وارد حساب خود شوید</p>
      <div class="max-w-sm mt-8">
        <AuthCheckOtpForm v-if="showCheckOtpForm"/>
        <AuthLoginForm v-else @show-check-otp-form="() => showCheckOtpForm = true"/>
      </div>
    </div>

   
  </div>
</template>

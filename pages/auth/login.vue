<script setup>
    const showCheckOtpForm = ref(false)
</script>
<template>
    
        <section class="pt-28">
            <div class="flex flex-col items-center justify-center px-6  mx-auto  ">
                
                <div class="w-full bg-white border shadow rounded-2xl   md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <NuxtLink to="/" class="flex justify-center mb-16">
                            <img class="h-40" src="/images/logo_full.png" alt="logo"> 
                        </NuxtLink>

                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            ورود | ثبت نام
                        </h1>
                        
                        <AuthCheckOtpForm v-if="showCheckOtpForm" @navigate="() => navigateTo('/profile') " />
                        <AuthLoginForm v-else @show-check-otp-form="() => showCheckOtpForm = true"/>

                    </div>
                </div>
            </div>
        </section>
  
</template>
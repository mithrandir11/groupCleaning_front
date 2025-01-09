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

                        
                        
                        <AuthCheckOtpForm v-if="showCheckOtpForm"/>
                        <AuthLoginForm v-else @show-check-otp-form="() => showCheckOtpForm = true"/>

                    </div>
                </div>
            </div>
        </section>
  
</template>
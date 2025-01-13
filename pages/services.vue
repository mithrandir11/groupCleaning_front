<script setup lang="ts">

</script>

<template>
    <div class="py-12">
        <h1 class="text-2xl font-bold text-center">همه خدمات</h1>
        <div class="flex justify-center mt-12">
            <NuxtLink :to="{name: 'order', params:{'service': 'cleaning'}}" class="text-center border rounded-lg px-6 py-2 bg-gray-100">
                <img class="h-16 " src="/images/cleaning_1.png" alt="">
                <p class="mt-3 text-gray-700  text-sm">نظافت منزل</p>
            </NuxtLink>
        </div>
    </div>
</template>
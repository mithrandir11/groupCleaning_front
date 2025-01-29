<script setup>
const { public:{apiBase} } = useRuntimeConfig();
const {data:services} = await useFetch(`${apiBase}/services`)
console.log(services.value)
</script>

<template>
    <div class="py-12">
        <h1 class="text-2xl font-bold text-center">همه خدمات</h1>
        <div class="flex justify-center gap-x-6 mt-12">
            <NuxtLink v-for="service in services.data" :to="{name: 'order', params:{'service': service.slug}}" class="text-center border rounded-lg px-6 py-2 bg-gray-100">
                <img class="h-16 " src="/images/cleaning_1.png" alt="sd">
                <p class="mt-3 text-gray-700  text-sm">{{ service.title_fa }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
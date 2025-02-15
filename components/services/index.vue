<script setup>
const { public:{apiBase} } = useRuntimeConfig();
// const {data:services} = await useFetch(`${apiBase}/services`)

const { data: services } = await useAsyncData('services', () =>
    $fetch(`${apiBase}/services`)
);
</script>

<template>
    <NuxtLink v-for="service in services.data" :to="{name: 'order', params:{'service': service.slug}}" class="text-center border border-gray-200 rounded-3xl px-6 py-2 bg-gray-50 hover:border-gray-300 duration-200">
        <img class="h-16 " :src="service.image" alt="sd">
        <p class="mt-3 text-gray-700 font-bold text-sm">{{ service.title_fa }}</p>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['suggested_pages'])
</script>
<template>
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            صفحات پیشنهادی
          </h2>
        </div>

        <div class="flex flex-wrap gap-x-3">
            <div v-for="suggested_page in props.suggested_pages">
                <NuxtLink :to="suggested_page.url" class="bg-gray-100 text-gray-500 rounded-full px-5 py-1">{{ suggested_page.title }}</NuxtLink>
            </div>
        </div>

        
      </div>
    </section>
</template>
<script setup>
const { public:{apiBase} } = useRuntimeConfig();
const {data:articles} = await useFetch(`${apiBase}/articles`)
// console.log(articles.value.data)
</script>

<template>
    <section class="py-12 ">
        <div class="">
          <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">جدید ترین مقالات</h2>
          <div class="grid grid-cols-4 justify-center  gap-8 ">

             <div v-for="article in articles.data" :key="article.id" class="group w-full  border border-gray-300 rounded-2xl">
              <div class="flex items-center">
                  <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover">
              </div>
              <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span class="text-blue-600 font-medium mb-3 block">{{ article.created_at }}</span>
                  <NuxtLink :to="{name: 'showArticle', params:{'id':article.id, 'slug':article.slug}}"><h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">{{ article.title }}</h4></NuxtLink>
                  <p class="text-gray-500 leading-6 mb-10">{{ article.summary }}</p>
                  <!-- <a href="javascript:;" class="cursor-pointer  text-blue-600 font-semibold">ادامه مطلب ...</a> -->
              </div>
             </div>

          </div>
        </div>
    </section>
                                            
</template>
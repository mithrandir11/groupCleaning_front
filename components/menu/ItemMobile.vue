<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});

const showSubMenu = ref(false)
</script>

<template>
    <li class="menu-item list-none">
      <!-- نمایش منوی والد -->
      <div  v-if="item.children && item.children.length" class="flex items-center justify-between w-full py-2 px-3   text-gray-900   md:hover:text-blue-500  " >
        <NuxtLink :to="`/menu/${item.full_path}`">{{ item.name }}</NuxtLink>
        <span @click="showSubMenu = !showSubMenu" class="bg-gray-200 px-2 rounded-lg">
          <svg  class="w-2.5 h-2.5  "  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </span>
        
      </div>
      
      <NuxtLink v-else :to="`/menu/${item.full_path}`"  activeClass=" bg-white rounded-lg" class="flex items-center justify-between w-full py-2 px-3 text-gray-900   md:hover:text-blue-500  ">
        {{ item.name }}
      </NuxtLink>
  
      <!-- نمایش فرزندان سطح اول (dropdown) -->
      <div v-if="item.children && item.children.length && level === 0 && showSubMenu" class="">
        <ul class="py-1 pr-2 text-sm text-gray-700 list-none">
          <MenuItemMobile v-for="child in item.children"  :key="child.id" :item="child" :level="level + 1" />
        </ul>
      </div>
  
      <!-- نمایش فرزندان سطح دوم و بالاتر (سمت چپ والد) -->
      <div v-if="item.children && item.children.length && level > 0 && showSubMenu" class="">
        <ul class="py-1 pr-2 text-sm text-gray-700 list-none">
          <MenuItemMobile
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :level="level + 1"
          />
        </ul>
      </div>
    </li>
</template>
  

  

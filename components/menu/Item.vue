<template>
    <li class="menu-item ">
      <!-- نمایش منوی والد -->
      <NuxtLink
        :to="`/menu/${item.full_path}`"
        v-if="item.children && item.children.length"
        class="flex items-center justify-between w-full py-2 px-3   text-gray-900   md:hover:text-blue-500  "
      >
        {{ item.name }}
        <svg
          class="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </NuxtLink>
      
      <NuxtLink
        v-else
        :to="`/menu/${item.full_path}`"
        class="flex items-center justify-between w-full py-2 px-3 text-gray-900   md:hover:text-blue-500  "
      >
        {{ item.name }}
      </NuxtLink>
  
      <!-- نمایش فرزندان سطح اول (dropdown) -->
      <div
        v-if="item.children && item.children.length && level === 0"
        class="dropdown  min-h-32"
      >
        <ul class=" text-sm text-gray-700">
          <MenuItem
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :level="level + 1"
          />
        </ul>
      </div>
  
      <!-- نمایش فرزندان سطح دوم و بالاتر (سمت چپ والد) -->
      <div
        v-if="item.children && item.children.length && level > 0"
        class="sub-dropdown min-h-32"
      >
        <ul class="py-2 text-sm text-gray-700">
          <MenuItem
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :level="level + 1"
          />
        </ul>
      </div>
    </li>
  </template>
  
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
  </script>
  
  <style scoped>
  /* استایل‌های dropdown */
  .menu-item {
    position: relative;
  }
  
  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
    font-weight: normal;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    min-width: 18rem; 
  }
  
  .sub-dropdown {
    display: none;
    position: absolute;
    right: 100%;
    top: -0.5rem;
    z-index: 10;
    font-weight: normal;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    min-width: 11rem; 
  }
  
  .menu-item:hover > .dropdown,
  .menu-item:hover > .sub-dropdown {
    display: block;
  }
  </style>
<script setup>

const { authUser } = useAuth()
const { public:{apiBase} } = useRuntimeConfig();
// const { data: menus } = await useFetch(`${apiBase}/menus`);

const { data: menus } = await useAsyncData(
  'menus', // کلید منحصر به فرد برای کش
  () => $fetch(`${apiBase}/menus`),
  {cache: true}
);
</script>

<template>
  <!-- {{ menus.data }} -->
  <nav class="container border-b fixed bg-white w-full  z-20 ">
    <div class=" flex flex-wrap items-center  mx-auto py-0 ">

      <NuxtLink to="/" class="ml-8">
          <img src="/images/logo.webp" class="w-20"   />
      </NuxtLink>

      <div class="hidden w-full md:block md:w-auto " id="navbar-multi-level">
      
          
      

        <ul class="flex  items-center rounded-lg  md:space-x-8 rtl:space-x-reverse  py-3 ">

          <li>
            <NuxtLink to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ">صفحه اصلی</NuxtLink>
          </li>

          <MenuItem
              v-for="menu in menus.data "
              :key="menu.id"
              :item="menu"
              :level="0"
          />

          <li>
              <NuxtLink :to="{name: 'blog'}" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">وبلاگ</NuxtLink>
          </li>

          
          <div class="hidden">
            
            <li class="group">
                      <button class="flex items-center justify-between w-full py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto ">
                        خدمات
                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                      <!-- Dropdown menu -->
                      <div class="z-10 hidden group-hover:block absolute font-normal  bg-white divide-y  rounded-lg shadow w-44  ">
                        <ul class="py-2 text-sm text-gray-700 ">
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 " >Dashboard</a>
                          </li>
                          
                          <!-- Dropdown menu -->
                          <li class="group/sub">
                            <button type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 ">
                              Dropdown
                              <svg class="w-2.5 h-2.5 ms-2.5"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 10 6">
                                <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                              </svg>
                            </button>

                            <div class="group-hover/sub:block z-10 hidden absolute right-44 -mt-10   divide-y rounded-lg shadow w-44 ">
                              <ul class="py-2 text-sm text-gray-700 " >
                                <li>
                                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 " >Overview</a>
                                </li>
                                <li>
                                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 " >My downloads</a>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 "
                              >Earnings</a
                            >
                          </li>
                        </ul>
                        
                      </div>
            </li>

            <li>
              <NuxtLink :to="{name: 'blog'}" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">وبلاگ</NuxtLink>
            </li>

            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">استخدام همکار</a>
            </li>

            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">سوالات متداول</a>
            </li>

            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">ارتباط با ما</a>
            </li>
          </div>

        </ul>
      </div>


      <div class="mr-auto flex items-center gap-x-1">
       
        <NuxtLink v-if="authUser" :to="{ name: 'profile' }" 
        class="flex gap-x-1 border border-gray-300  rounded-lg px-2 py-1 text-sm text-gray-600 ml-3">
        <svg width="18" height="18" viewBox="0 0 25 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z" fill="#343C54"/>
          <path d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z" fill="#343C54"/>
        </svg>

        مشاهده پروفایل
        </NuxtLink>

        <NuxtLink v-else :to="{ name: 'login' }" class="flex border border-gray-300  rounded-lg px-2 py-1 text-sm text-gray-600 ml-3">ورود | ثبت نام</NuxtLink>
        
        <span class="font-bold text-blue-500">021-665555</span>
        <svg class="w-5 h-5 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
      </div>

      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      
    </div>
  </nav>
</template>

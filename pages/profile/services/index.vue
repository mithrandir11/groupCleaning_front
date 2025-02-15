<script setup>


const charSearch = ref('');

const router = useRouter()
const route = useRoute()
const query = ref({})
query.value = route.query

const {data, refresh} = await useFetch(()=> '/api/profile/orders', {
    query: query,
    headers: useRequestHeaders(['cookie'])
})

console.log(data.value)


function handleFilter(param){
    query.value = { ...route.query, ...param }

    if(!param.hasOwnProperty('page')){
        delete query.value.page
    }

    router.push({
        query: query.value 
    })

    refresh()
}

function removeFilter(paramKey) {
    const { [paramKey]: _, ...rest } = query.value;
    query.value = rest;

    delete query.value.page;

    router.push({
        query: query.value,
    });

    refresh();
}

function handleSearch(char){
    char ? handleFilter({order_code: char}) : removeFilter('order_code')
}


const { getStatusClass } = useStatus()
</script>
<template>

    
    
    <div class=" overflow-x-auto  grow">

        
        <div class="max-w-sm ">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input v-model.lazy="charSearch" type="text" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none  focus:border-blue-500" placeholder="کد سفارش ..." required />
                <button @click="handleSearch(charSearch)" type="button" class="text-white absolute end-2 bottom-1.5 bg-gray-500 hover:bg-gray-600 duration-200  outline-none  font-medium rounded-lg text-xs px-3 py-2">جستجو</button>
            </div>
        </div>

      
        
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 mt-10">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ردیف
                    </th>
                    <th scope="col" class="px-6 py-3">
                        کد سفارش
                    </th>
                    <!-- <th scope="col" class="px-6 py-3">
                        شماره مشتری و نام و نام‌خانوادگی
                    </th> -->
                    <th scope="col" class="px-6 py-3">
                        وضعیت سفارش
                    </th>
                    <th scope="col" class="px-6 py-3">
                        موضوع سفارش
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        امکانات
                    </th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(order, index) in data" class="odd:bg-white  even:bg-gray-50  border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {{ data.length - index }}
                    </th>
                    <td class="px-6 py-4">
                        {{ order.order_code }}
                    </td>
                    <!-- <td class="px-6 py-4">
                        ------
                    </td> -->
                    <td class="px-6 py-4" :class="getStatusClass(order.status)">
                        {{ order.status_fa  }}
                    </td>
                    <td class="px-6 py-4">
                        ----
                    </td>
                    <td class="px-6 py-4 text-center">
                        <NuxtLink :to="{name: 'profile.services.details', params:{id: order.id}}" class="bg-blue-100 py-1 px-4 text-black text-sm  rounded-full font-semibold transition-all duration-200 " > مشاهده </NuxtLink>
                        <!-- <UtilsModal title="نمایش جزییات" btn-color="bg-blue-200" btn-title="نمایش">
                            <ProfileServicesShowDetails :order="order"/>
                        </UtilsModal> -->
                    </td>
                </tr>
               
            </tbody>
        </table>


        

        
        <nav v-if="data.last_page > 1" class="flex justify-center py-8 items-center gap-x-4 min-w-max mt-72">
            <a class="text-gray-500 hover:text-gray-900 p-4 inline-flex items-center md:mr-8 mr-1" >
            <span>صفحه قبل</span>
            </a>

            <template  v-for="page_number in data.last_page">
                <button @click="handleFilter({page: page_number})" :class="{'bg-blue-500 text-white': page_number == query.page , 'bg-gray-50': page_number != query.page}" type="button"  class="w-10 h-10 text-gray-500 p-2 inline-flex items-center justify-center border   rounded-full transition-all duration-150 hover:text-blue-900 hover:border-blue-600 hover:bg-blue-50"  >{{ page_number }}</button>
            </template>

          
            <!-- <a class="w-10 h-10 bg-blue-600 text-white p-2 inline-flex items-center justify-center rounded-full transition-all duration-150 hover:bg-blue-600 hover:text-white" >2</a>
            <a class="w-10 h-10 text-gray-500 p-2 inline-flex items-center justify-center border border-gray-200 bg-gray-50 rounded-full transition-all duration-150 hover:text-blue-900 hover:border-blue-600 hover:bg-blue-50" >3</a>
            <a class="w-10 h-10 text-gray-500 p-2 inline-flex items-center justify-center border border-gray-200 bg-gray-50 rounded-full transition-all duration-150 hover:text-blue-900 hover:border-blue-600 hover:bg-blue-50" >4</a>
            <a class="w-10 h-10 text-gray-500 p-2 inline-flex items-center justify-center border border-gray-200 bg-gray-50 rounded-full transition-all duration-150 hover:text-blue-900 hover:border-blue-600 hover:bg-blue-50" >...</a>
            <a class="w-10 h-10 text-gray-500 p-2 inline-flex items-center justify-center border border-gray-200 bg-gray-50 rounded-full transition-all duration-150 hover:text-blue-900 hover:border-blue-600 hover:bg-blue-50" >10</a> -->
            
            <a class="text-gray-500 hover:text-gray-900 p-4 inline-flex items-center md:ml-8 ml-1" >
            <span>صفحه بعد</span>
            </a>
        </nav>

                

    </div>

</template>
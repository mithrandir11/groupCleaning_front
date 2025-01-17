<script setup>

const {data, refresh} = await useFetch(()=> '/api/profile/addresses', {
    headers: useRequestHeaders(['cookie'])
})

// console.log(data.value)

</script>
<template>
    <div class=" overflow-x-auto  grow">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ردیف
                    </th>
                    <th scope="col" class="px-6 py-3">
                        استان
                    </th>
                    <th scope="col" class="px-6 py-3">
                        شهر
                    </th>
                    <th scope="col" class="px-6 py-3">
                        آدرس کامل
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        امکانات
                    </th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="address in data" class="odd:bg-white  even:bg-gray-50  border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        ۱
                    </th>
                    <td class="px-6 py-4">
                        {{ address.state }}
                    </td>
                    <td class="px-6 py-4">
                        {{ address.city }}
                    </td>
                    <td class="px-6 py-4">
                        {{ address.full_address }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        <UtilsModal title="ویرایش آدرس" btn-color="bg-yellow-200" btn-title="ویرایش">
                            <template #default="{ closeModal }">
                                <ProfileAddressEdit :refresh="refresh" :address="address" @close="closeModal" />
                            </template>
                        </UtilsModal>
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
</template>
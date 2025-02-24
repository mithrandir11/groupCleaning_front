<script setup>
const { public:{apiBase} } = useRuntimeConfig();
const { data: notifications } = await useAsyncData('notifications', () =>
    $fetch(`${apiBase}/notifications`)
);

console.log(notifications.value.data.data)
</script>
<template>
    <div class=" overflow-x-auto  grow">


        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    عنوان
                </th>
                <th scope="col" class="px-6 py-3">
                    پیام
                </th>
                <th scope="col" class="px-6 py-3">
                    تاریخ
                </th>
            </tr>
        </thead>
        
        <tbody>
            <tr v-for="notification in notifications.data.data" class="odd:bg-white  even:bg-gray-50  border-b ">
                <td class="px-6 py-4">
                    {{ notification.title }}
                </td>
                <td class="px-2 py-4 max-w-sm">
                    {{  notification.message }}
                </td>
                <td class="px-6 py-4">
                    {{ notification.created_at }}
                </td>
            </tr>   
        </tbody>
    </table> 
    </div>
</template>
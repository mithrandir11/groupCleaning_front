<script setup>

const route = useRoute()
const id = route.params.id 

const { data:order, error } = await useFetch(`/api/profile/order/${id}`, {
    headers: useRequestHeaders(['cookie']) // ارسال کوکی به API
});

// console.log(data.value)

// if (error.value) {
//     console.error('Error fetching order:', error.value);
// }

// const { getStatusClass } = useStatus()
</script>
<template>
    
    
    <div class="flex flex-col grow">
       
        <ProfileServicesShowDetails :order="order"/>

        
    </div>
    

</template>
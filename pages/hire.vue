<script setup>
const { public: { apiBase } } = useRuntimeConfig();
const isLoading = ref(false)

// const formData = ref(null)
const personalImage = ref()
async function create(data) {

    // console.log(personalImage.value);
    const formData = new FormData()
    // formData.append('personal_image', personalImage.value)


    data.personal_image.forEach((fileItem) => {
      formData.append('personal_image', fileItem.file)
    })
    // formData.append('personal_image', personalImage.value)

    try {
      const res = await $fetch(`${apiBase}/resume/store`, {
          method: 'POST',
          body: formData
      })
      console.log(res)
      
    } catch (error) {
      // console.log(error)
      // push.error(error.data.data.message)
    }
    

}

</script>

<template>
   <ClientOnly fallback-tag="span" fallback="در حال بارگذاری ...">
    <FormKit type="form" @submit="create" :incomplete-message="false" :actions="false">
        <!-- <div class="row gy-4">

            <HirePersonalImage @set-personal-image="(image) => personalImage = image" />

        </div> -->
        <FormKit
          type="file"
           name="personal_image"
          label="personal_image"
          multiple="false"
        />


        <FormKit type="submit" :disabled="isLoading" input-class="flex  items-center justify-center text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg text-sm px-5 py-2.5 text-center ">
            <UtilsLoading v-if="isLoading" class="ml-3"/>
            ثبت رزومه
        </FormKit>
    </FormKit>
  </ClientOnly>
    
</template>

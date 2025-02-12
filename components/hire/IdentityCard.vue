<script setup>

const emit = defineEmits(['setIdentityCard']);

const image = ref(null)
const loading = ref(false);

function imageFile(el) {
    // console.log(el.target.files[0])
    loading.value = true;

    const reader = new FileReader();
    reader.readAsDataURL(el.target.files[0]);

    reader.onloadend = () => {
        image.value = reader.result.toString()
        loading.value = false;
    }

    emit('setIdentityCard', el.target.files[0])
}

function removeImage() {
    image.value = null;
    emit('setIdentityCard', null)
}

</script>

<template>
    <div >
        <div class="row justify-center">
            <div >
                <div v-if="image" class="relative">
                    <img :src="image" class="h-40 w-auto rounded-lg border" alt="primary image">
                    <div @click="removeImage" class="absolute top-3 right-3  bg-white  rounded-lg px-2 py-1 border cursor-pointer">
                     
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.999 10.9384L16.7176 6.2198C17.0105 5.92691 17.4854 5.92691 17.7782 6.2198C18.0711 6.51269 18.0711 6.98757 17.7782 7.28046L13.0597 11.999L17.7782 16.7176C18.0711 17.0105 18.0711 17.4854 17.7782 17.7782C17.4854 18.0711 17.0105 18.0711 16.7176 17.7782L11.999 13.0597L7.28033 17.7784C6.98744 18.0713 6.51256 18.0713 6.21967 17.7784C5.92678 17.4855 5.92678 17.0106 6.21967 16.7177L10.9384 11.999L6.21967 7.28033Z" fill="#ed2323"/>
                            </svg>
                       

                        <!-- <i class="bi bi-x text-danger fs-2 cursor-pointer"></i> -->
                    </div>
                </div>

                <div v-else>
                    <label for="formFile" class="block mb-2 text-sm font-medium text-gray-900">تصویر کارت ملی (gpeg,png  حداکثر 5 مگابایت)</label>
                    <div class="relative">
                        <input @change="imageFile" :disabled="loading" class="form-control" type="file" id="formFile" />
                        <UtilsLoading v-if="loading" theme="dark" class="ml-3 "/>
                        <!-- <div v-if="loading"
                            class="spinner-border spinner-border-sm text-primary absolute start-50"
                            style="top:32%">
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


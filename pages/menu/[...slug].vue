<script setup>
const route = useRoute();
const { public: { apiBase } } = useRuntimeConfig();
const slug = route.params.slug.join('/');
// console.log(slug);

const { data: menu } = await useFetch(`${apiBase}/menus/${slug}`);

console.log(menu.value.data);

</script>

<template>
    <div>
        {{ menu.data.text }}
    </div>

    <Faq :faqs="menu.data.faqs"/>
    <SuggestedPages :suggested_pages="menu.data.suggested_pages"/>
</template>
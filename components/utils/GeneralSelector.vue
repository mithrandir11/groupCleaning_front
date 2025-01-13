<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false, // مقدار پیش‌فرض برای حالت تک‌انتخابی
  },
  modelValue: {
    type: [Array, String],
    default: () => [], // مقدار پیش‌فرض
  },
  gridClasses: {
    type: String,
    default: 'grid-cols-1', // مقدار پیش‌فرض برای تعداد ستون‌ها
  },
});

const emit = defineEmits(['update:modelValue']);

const isSelected = (item) => {
  if (props.multiple) {
    return props.modelValue.includes(item);
  }
  return props.modelValue === item;
};

const toggleSelection = (item) => {
  if (props.multiple) {
    const updatedSelection = props.modelValue.includes(item)
      ? props.modelValue.filter((i) => i !== item)
      : [...props.modelValue, item];
    emit('update:modelValue', updatedSelection);
  } else {
    emit('update:modelValue', props.modelValue === item ? null : item);
  }
};
</script>


<template>
    <div class="selector grid gap-4" :class="gridClasses">
      <div
        v-for="item in items"
        :key="item"
        @click="toggleSelection(item)"
        :class="{
          'bg-blue-200 border border-blue-300': isSelected(item),
          'bg-gray-100 border': !isSelected(item),
        }"
        class="cursor-pointer p-4 rounded-lg   text-gray-700 duration-200   hover:bg-blue-100 hover:border-blue-100 text-lg"
      >
        <svg v-if="isSelected(item)" class="w-5 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        {{ item }}
      </div>
    </div>
</template>
  

  
<!-- <style scoped>
.selector div:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
}
</style> -->
  
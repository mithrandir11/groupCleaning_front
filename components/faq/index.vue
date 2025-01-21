<script setup>
const props = defineProps(['faqs'])

const visibleAnswers = ref(props.faqs.map(() => false));

const toggleAnswer = (index) => {
  visibleAnswers.value[index] = !visibleAnswers.value[index];
};
</script>
<template>
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h6 class="text-lg text-blue-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2
            class="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
          >
            سوالات متداول 
          </h2>
        </div>

        <div class="accordion-group space-y-3">

          <div v-for="(faq, index) in props.faqs"
            class="accordion py-8 px-6 border border-gray-200 transition-all duration-500 rounded-2xl hover:bg-blue-50 hover:border-blue-200 accordion-active:bg-blue-50 active">
            <button @click="toggleAnswer(index)" class="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-blue-600 accordion-active:font-medium accordion-active:text-blue-600">
              <h5>{{ faq.question }}</h5>
              <svg
                class="text-gray-500 transition duration-500 group-hover:text-blue-600 accordion-active:text-blue-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div v-if="visibleAnswers[index]" class="accordion-content w-full px-0 overflow-hidden mt-4" >
              <p class="text-base text-gray-900 leading-6">{{ faq.answer }}</p>
            </div>
          </div>




         

          

        </div>
      </div>
    </section>
                                            
</template>
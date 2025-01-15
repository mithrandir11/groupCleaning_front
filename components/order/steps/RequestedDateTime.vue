<script setup>
import { Navigation, Scrollbar, A11y   } from 'swiper/modules'
const modules = [Navigation, Scrollbar, A11y ];
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle';
const orderStore = useOrderStore();

const selectedDate = ref(null);
const selectedTime = ref(null);

const currentDate = new Date(); // تاریخ امروز

// تاریخ امروز تا دو هفته آینده
const dates = ref(
  Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    return {
      date: date.toLocaleDateString('fa-IR'),
      dayName: i === 0 ? 'امروز' : new Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(date),
    };
  })
);

selectedDate.value = dates.value[0].date;

// لیست تمام ساعات
const allHours = Array.from({ length: 18 }, (_, i) => 6 + i);

// محاسبه ساعات مجاز
const disabledHours = computed(() => {
  const now = new Date();
  now.setSeconds(0, 0); // حذف ثانیه‌ها و میلی‌ثانیه‌ها

  // محاسبه زمان حال + 3 ساعت با گرد کردن دقیقه‌ها رو به بالا
  const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  if (threeHoursLater.getMinutes() > 0) {
    threeHoursLater.setHours(threeHoursLater.getHours() + 1); // گرد کردن ساعت رو به بالا
  }
  threeHoursLater.setMinutes(0, 0, 0); // تنظیم دقیقه و ثانیه روی صفر

  // اگر امروز انتخاب شده است
  if (selectedDate.value === currentDate.toLocaleDateString('fa-IR')) {
    // اگر 3 ساعت بعد به روز بعد برسد، تمام ساعات غیرقابل انتخاب هستند
    if (threeHoursLater.getDate() !== currentDate.getDate()) {
      return allHours; // تمام ساعات غیرفعال
    }
    // در غیر این صورت، فقط ساعات قبل از `threeHoursLater` غیرفعال هستند
    return allHours.filter((hour) => hour < threeHoursLater.getHours());
  }

  // برای روزهای دیگر تمام ساعات فعال هستند
  return [];
});

// انتخاب تاریخ
const selectDate = (day) => {
  selectedDate.value = day.date;
  selectedTime.value = null;
};

// انتخاب ساعت
const selectTime = (hour) => {
  if (!disabledHours.value.includes(hour)){
    selectedTime.value = hour;
  }
};


const isOptionValid = () => {
  if (selectedDate.value && selectedTime.value) {
    return true
  }else{
    return false
  }
};

// رفتن به مرحله بعد
const goToNextStep = () => {
  if (selectedDate.value && selectedTime.value) {
    orderStore.setSelectedDateTime(selectedDate.value, selectedTime.value);
    // console.log('تاریخ و ساعت ذخیره شد:', selectedDate.value, selectedTime.value);
    orderStore.nextStep()
  } else {
    console.log('لطفاً تاریخ و ساعت معتبر را انتخاب کنید.');
  }
};
</script>

<template>
    <div class="flex justify-between mb-6">
        <p class="font-bold text-xl ">تاریخ و ساعت درخواستی خود را انتخاب کنید</p>
        <p class="bg-red-500 rounded-full px-2 py-1 text-xs text-white">پاسخ الزامی میباشد</p>
    </div>
    <!-- <p class="font-bold text-xl mb-6">تاریخ و ساعت درخواستی خود را انتخاب کنید</p> -->
    <div class="grid max-w-full">
        <div class=" overflow-x-auto  ">
            <!-- بخش انتخاب تاریخ -->
            <div class=" swiper-container mb-8  rounded-lg  py-3">
                <swiper
                  :modules="modules"
                  :slides-per-view="7"
                  space-between="10"
                  :navigation="{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                  }"
                  class="my-swiper "
                  >
                    <swiper-slide class="p-2 rounded-lg cursor-pointer mx-7"
                        v-for="(day, index) in dates"
                        :key="index"
                        :class="{'bg-blue-100 border-blue-300': selectedDate === day.date}"
                        @click="selectDate(day)"
                    >
                    
                      <p :class="{'font-bold': selectedDate === day.date}" class=" text-center">{{ day.dayName }}</p>
                      <p class=" text-center">{{ day.date }}</p>
                    
                    </swiper-slide>


                    <button class="custom-next absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 h-full text-primary-900 p-3  z-10">
                        <svg class="h-5 w-5 fill-primary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button class="custom-prev   absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white h-full bg-opacity-60 text-primary-900 p-3 z-10">
                        <svg class="h-5 w-5 fill-primary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                </swiper>
            </div>

            <!-- بخش انتخاب ساعت -->
            <div class=" time-options grid grid-cols-3 gap-3">
            <button type="button" class="   rounded-lg p-2 text-sm"
                v-for="(hour, index) in allHours"
                :key="index"
                :class="{ 
                  'text-gray-400 border-0 border-opacity-50': disabledHours.includes(hour), 
                  'bg-blue-100 border border-blue-300  font-bold': hour === selectedTime ,
                  'bg-gray-50 border border-gray-300 ': hour !== selectedTime ,
                  }"
                :disabled="disabledHours.includes(hour)"
                
                @click="selectTime(hour)"
            >
                ساعت {{ hour }}
            </button>
            </div>

            <!-- نمایش زمان انتخاب‌شده -->
            <div class="selected-time mt-12 text-center ">
            <p>زمان انتخابی شما: <span class="font-bold mx-3">{{ selectedDate }} - ساعت {{ selectedTime }}</span></p>
            </div>
        </div>


        <div class="flex gap-x-3 justify-center mt-14">
            <button @click="orderStore.previousStep"  type="button" class="border border-gray-600  px-8 py-2 text-sm rounded-lg  ">مرحله قبل</button>
            
            <button @click="goToNextStep" :disabled="!isOptionValid()"
            :class="{
                'bg-gray-600 hover:bg-gray-700 duration-200': isOptionValid(),
                'bg-gray-400 cursor-not-allowed': !isOptionValid()
            }" 
             type="button" class="  px-8 py-2 text-sm rounded-lg text-white ">
                مرحله بعد
            </button>
        </div>
    </div>

</template>
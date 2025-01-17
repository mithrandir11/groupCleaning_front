export const useOrderStore = defineStore('order', {
  state: () => ({
    step: 6, // مرحله اصلی
    maxSteps: 7,
    subStep: 1, // زیرمرحله
    maxSubSteps: {}, // تعداد زیرمراحل برای هر مرحله اصلی، به‌صورت داینامیک
    orderData: {
      serviceType: null, // نوع نظافت
      serviceOptions: {}, // گزینه‌های خدمات
      extraDetails: null, // اطلاعات اضافی برای زیرمراحل
      selectedDateTime: { // تاریخ و ساعت انتخاب‌شده
        date: null,
        time: null,
      },
      contactNumber: { // ارائه شماره تماس
        number: null,
        isAcceptedTerms: true,
      },
      address: null, // آدرس
    },
  }),
  actions: {
    setMaxSubSteps(step, count) {
      this.maxSubSteps[step] = count;
    },
    nextStep() {
      if (this.subStep < (this.maxSubSteps[this.step] || 0)) {
        this.subStep++;
      } else if (this.step < this.maxSteps) {
        this.step++;
        this.subStep = 1; // بازنشانی زیرمرحله به 1
      }
    },
    previousStep() {
      if (this.subStep > 1) {
        this.subStep--;
      } else if (this.step > 1) {
        this.step--;
        this.subStep = this.maxSubSteps[this.step] || 1; // تنظیم زیرمرحله به آخرین مقدار
      }
    },
    setSelectedDateTime(date, time) {
      this.orderData.selectedDateTime = { date, time };
    },

  },
});

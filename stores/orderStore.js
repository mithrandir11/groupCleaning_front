export const useOrderStore = defineStore('order', {
  state: () => ({
    step: 1, // مرحله اصلی
    subStep: 1, // زیرمرحله
    maxSubSteps: {}, // تعداد زیرمراحل برای هر مرحله اصلی، به‌صورت داینامیک
    orderData: {
      serviceType: null, // نوع نظافت
      serviceOptions: {}, // گزینه‌های خدمات
      address: null, // آدرس
      extraDetails: {}, // اطلاعات اضافی برای زیرمراحل
    },
  }),
  actions: {
    setMaxSubSteps(step, count) {
      // مقدار زیرمراحل را برای مرحله مشخص تنظیم می‌کند
      this.maxSubSteps[step] = count;
    },
    nextStep() {
      if (this.subStep < (this.maxSubSteps[this.step] || 0)) {
        this.subStep++;
      } else if (this.step < 3) {
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
  },
});

<script setup>
// var moment = moment().format('jYYYY/jM/jD')
// console.log(moment)

</script>
<template>
    <!-- <div class="space-y-12"> -->
        <!-- <h1 class="font-bold text-xl">ثبت سفارش</h1> -->

        <div class="flex gap-x-12 ">
            <OrderStepper/>

            <div class="grow">

               <div class="hidden"> <!-- //step1 -->
                    <p class="font-bold text-xl">نوع نظافت</p>

                    <div class="mt-6 space-y-4">
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">سرویس عادی</div>
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">سرویس لوکس</div>
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">سرویس دوره‌ای</div>
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">نظافت راه پله</div>
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">سرویس پذیرایی</div>
                        <div class="cursor-pointer p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">کارگر ساده</div>
                    </div>
                </div>

                <div class="space-y-16"> <!-- //step2 -->

                    <div>
                        <p class="font-bold text-xl">نوع فضای موردنظر</p>
                        <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                            <option selected>مسکونی</option>
                            <option value="US">اداری/تجاری</option>
                            <option value="CA">نوساز/تخلیه</option>
                        </select>

                        <!-- <div class="mt-6 space-y-4">
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">مسکونی</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">اداری/تجاری</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">نوساز/تخلیه</div>
                        </div> -->
                    </div>

                    <div>
                        <p class="font-bold text-xl">موارد مشمول نظافت</p>
                        <div class="mt-6 grid grid-cols-4 gap-4">
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">دیوارشویی</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">آشپرخانه</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شستن ظروف</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شستن کف</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">سرویس بهداشتی</div>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-xl">برآورد از زمان مورد نیاز</p>
                        <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                            <option selected>4 ساعت</option>
                            <option value="US">5 ساعت</option>
                            <option value="CA">6 ساعت</option>
                            <option value="FR">7 ساعت</option>
                            <option value="DE">8 ساعت</option>
                            <option value="DE">9 ساعت</option>
                            <option value="DE">10 ساعت</option>
                        </select>
                    </div>

                    <div>
                        <p class="font-bold text-xl">متراژ فضا</p>
                        <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                            <option selected>کمتر از 50 متر</option>
                            <option value="US">50 تا 70 متر</option>
                            <option value="US">70 تا 90 متر</option>
                            <option value="US">90 تا 130 متر</option>
                            <option value="US">بیشتر از 130 متر</option>
                        </select>
                    </div>

                    <div>
                        <p class="font-bold text-xl">خدمات تکمیلی</p>
                        <div class="mt-6 grid grid-cols-4 gap-4">
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">باز و نصب کردن پرده</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">اتوکشی پرده</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شامپو فرش و مبل</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">لوستر</div>
                            <div class="cursor-pointer p-3 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-100 hover:border hover:border-blue-300 text-lg">شستن فرش</div>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-xl">تعداد نیروی موردنیاز</p>
                        <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                            <option selected>1 نفر</option>
                            <option value="US">2 نفر</option>
                            <option value="US">3 نفر</option>
                            <option value="US">4 نفر</option>
                            <option value="US">5 نفر</option>
                        </select>
                    </div>

                    <div>
                        <p class="font-bold text-xl">حیوان خانگی دارید؟</p>
                        <select id="countries" class="mt-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  ">
                            <option selected>خیر</option>
                            <option value="US">بله</option>
                        </select>
                    </div>

                    <div>
                        <p class="font-bold text-xl">تاریخ و ساعت درخواستی</p>   
                        <date-picker type="datetime" min="1403/10/16" />
                    </div>

                </div>

            </div>
        </div>
    <!-- </div> -->
</template>
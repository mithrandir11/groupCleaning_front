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

                <div class="space-y-16 "> <!-- //step2 -->

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

                <div class="hidden"> <!-- //step3 -->
                    <p class="font-bold text-xl">سایر توضیحات و درخواست‌ها</p>

                    <div class="mt-6 ">
                        <textarea rows="4" class="w-full p-5 rounded-lg  bg-gray-100 text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg"></textarea>
                        
                    </div>
                </div>

                <div class=""> <!-- //step3 -->
                    <p class="font-bold text-xl">ورود شماره موبایل</p>

                    <div class="mt-6 ">
                        
                        
                        <div class="relative mb-6 w-72">
                            
                            <input type="text"  class="ltr w-full p-3 rounded-lg   text-gray-700 duration-200 border border-gray-200  focus:border-blue-300 outline-none text-lg pl-10"/>
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                <svg class="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            </div>
                            <!-- <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"> -->
                        </div> 

                        
                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" checked class="w-4 h-4 text-blue-600  border-gray-300 rounded  ">
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" class="text-blue-600  hover:underline ">شرایط و قوانین</a> موسسه را مطالعه نموده و می پذیرم.</label>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    <!-- </div> -->
</template>
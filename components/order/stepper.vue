<template>
    <!-- <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base ">

        <li class="flex w-full relative    after:w-full after:h-0.5  after:bg-blue-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:right-4">
            <div class="block whitespace-nowrap z-10 text-sm">
                <span class="w-6 h-6 bg-blue-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">1</span> 
                انتخاب نوع خدمات
            </div>
        </li>

        <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:right-4">
            <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-blue-50 border-2 border-blue-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-blue-600 lg:w-10 lg:h-10">2</span> Step 2
            </div>
        </li>

        <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:right-4">
            <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">3</span> Step 3
            </div>
        </li>

        <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:right-4">
            <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">4</span> Step 4
            </div>
        </li>

        <li class="flex w-full relative text-gray-900  ">
            <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">5</span> Step 5
            </div>
        </li>

    </ol> -->

    <!-- <div class="mt-8  flex justify-between ">
        <div class="grow flex items-center relative">
            <span class="w-6 h-6 bg-blue-200 border-0  rounded-full flex justify-center items-center   text-blue-600 lg:w-10 lg:h-10">1</span>
            <div class="grow  h-1 bg-blue-200 text-sm"></div>
            <span class="absolute top-10 right-0 text-sm text-gray-700">انتخاب نوع خدمات</span>
        </div>
        <div class="grow flex items-center relative">
            <span class="w-6 h-6 bg-blue-500 border-0  rounded-full flex justify-center items-center  text-sm text-white lg:w-10 lg:h-10">2</span>
            <div class="grow  h-1 bg-gray-200"></div>
            <span class="absolute top-10 right-0 text-sm text-gray-700">انتخاب گزینه های خدمات</span>
        </div>
        <div class="grow flex items-center relative">
            <span class="w-6 h-6  border-2  rounded-full flex justify-center items-center  text-sm lg:w-10 lg:h-10">3</span>
            <div class="grow  h-1 bg-gray-200"></div>
            <span class="absolute top-10 right-0 text-sm text-gray-700">توضیحات بیشتر</span>
        </div>
        <div class="grow flex items-center relative">
            <span class="w-6 h-6  border-2  rounded-full flex justify-center items-center  text-sm lg:w-10 lg:h-10">4</span>
            <div class="grow  h-1 bg-gray-200"></div>
            <span class="absolute top-10 right-0 text-sm text-gray-700">ارائه شماره تماس</span>
        </div>
        <div class="grow flex items-center relative">
            <span class="w-6 h-6  border-2  rounded-full flex justify-center items-center  text-sm lg:w-10 lg:h-10">5</span>
            <div class="grow  h-1 bg-gray-200"></div>
            <span class="absolute top-10 right-0 text-sm text-gray-700">ثبت و تایید آدرس</span>
        </div>
        <div class=" flex items-center relative">
            <span class="w-6 h-6  border-2  rounded-full flex justify-center items-center  text-sm lg:w-10 lg:h-10">6</span>
            <span class="absolute top-10 left-0 text-sm text-gray-700 text-nowrap">ثبت سفارش</span>
        </div>
    </div> -->

    

    <ol class="relative text-gray-500 border-s border-gray-200  mt-3 space-y-14 mr-5 self-start">                  
        <li class=" ms-8 flex items-center">            
            <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 text-white">
                <svg class="w-3.5 h-3.5 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
            <p class="text-sm">نوع خدمات</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full -start-5 text-white">
                2
            </span>
            <p class="text-sm">گزینه های خدمات</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -start-5 ">
                3
            </span>
            <p class="text-sm">توضیحات بیشتر</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -start-5 ring-5 ring-white ">
                4
            </span>
            <p class="text-sm">شماره تماس</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -start-5 ring-5 ring-white ">
                5
            </span>
            <p class="text-sm">ثبت و تایید آدرس</p>
        </li>
        <li class="ms-8 flex items-center">
            <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -start-5 ring-5 ring-white ">
                6
            </span>
            <p class="text-sm">ثبت سفارش</p>
        </li>
    </ol>

</template>
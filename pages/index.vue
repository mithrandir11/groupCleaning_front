<template>



<div class="space-y-24 ">

    <div class=" bg-gray-600   rounded-3xl p-6 relative  bg-[url(/images/drop3.png)] bg-no-repeat bg-cover md:hidden ">
        <!-- <div class=" bg-gray-600   rounded-3xl p-6 relative mt-12  "> -->
        
            <div class="grow  self-center relative">
                <button class="bg-gray-500 text-white  rounded-full px-8 py-4 absolute right-4 top-2">جستجو</button>
                <input type="text" name="" id="" placeholder="سرویس خود را جستجو کنید .." class="border-0 border-black border-opacity-50 shadow bg-white outline-0 border-l-0 p-6 w-full  rounded-full pr-36">
            </div>
       
    </div>
    
    <div class=" bg-gray-600   rounded-3xl p-6 relative mt-12 bg-[url(/images/drop3.png)] bg-no-repeat bg-cover md:block hidden">
        <!-- <div class=" bg-gray-600   rounded-3xl p-6 relative mt-12  "> -->
        <div class="flex justify-between mx-52 ">
            <div class="grow  self-center relative">
                <button class="bg-gray-500 text-white  rounded-full px-8 py-4 absolute right-4 top-2">جستجو</button>
                <input type="text" name="" id="" placeholder="سرویس خود را جستجو کنید .." class="border-0 border-black border-opacity-50 shadow bg-white outline-0 border-l-0 p-6 w-full  rounded-r-full pr-36">
            </div>
            <img src="/images/bg.png" alt="" class="hexagon w-72 -my-12  z-10 ">
            <div class="hexagon2 bg-blue-200  absolute -top-8 left-28 bg-opacity-60 h-40"></div>
            <div class="hexagon2 bg-gray-100 absolute -bottom-5 left-44 bg-opacity-60 h-32"></div>
        </div>
    </div>

    



    <section>
        <h4 class="text-gray-900 text-xl font-bold font-manrope leading-normal mb-7">خدمات نظافت گروپ</h4>
        <div class="flex gap-4">
            <Services/>
        </div>
    </section>

    <SliderMainSlider/>

    <section class="relative ">
            <div class="w-full ">
                <div class="w-full flex-col justify-start items-start  inline-flex">
                    <h4 class="text-gray-900 text-xl font-bold font-manrope leading-normal mb-7">دیدگاه کاربران درباره نظافت گروپ</h4>
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <div
                            class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                            <div class="w-full flex-col justify-start items-start gap-3.5 flex">
                                <div class="w-full justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2.5 flex">
                                        <div
                                            class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                            <img class="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710225753.png"
                                                alt="John smith image" />
                                        </div>
                                        <div class="flex-col justify-start items-start gap-1 inline-flex">
                                            <h5 class="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                                            <h6 class="text-gray-500 text-xs font-normal leading-5">5 Day ago</h6>
                                        </div>
                                    </div>
                                    <div class="group justify-end items-center flex">
                                        <div
                                            class="px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-blue-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                                            <a href="" class="">
                                                <svg class="group-hover:text-blue-600 text-gray-400 group-hover:fill-blue-600 fill-white transition-all duration-700 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                                                        stroke="currentColor" />
                                                </svg>
                                            </a>
                                            <div class="px-1 justify-center items-center flex">
                                                <h5 class="group-hover:text-blue-600 text-gray-400 transition-all duration-700 ease-in-out text-sm font-semibold leading-relaxed">4 از 10</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-800 text-sm font-normal leading-snug">
                                    بالاخره تصمیم گرفتم برای خدمات نظافت شما اقدام کنم و حاصل آن رضایت بالایی بود. تیم شما حرفه‌ای بود و خانه من را به شکلی تمیز کردند که حتی زوایا و فضاها را از پیش دیده نبودم. مراقب هستند که هر جزء کوچکی از منزل به صورت کامل رسیدگی شود.
                                </p>
                            </div>
                        </div>

                        <div
                            class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                            <div class="w-full flex-col justify-start items-start gap-3.5 flex">
                                <div class="w-full justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2.5 flex">
                                        <div
                                            class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                            <img class="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710225753.png"
                                                alt="John smith image" />
                                        </div>
                                        <div class="flex-col justify-start items-start gap-1 inline-flex">
                                            <h5 class="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                                            <h6 class="text-gray-500 text-xs font-normal leading-5">5 Day ago</h6>
                                        </div>
                                    </div>
                                    <div class="group justify-end items-center flex">
                                        <div
                                            class="px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-blue-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                                            <a href="" class="">
                                                <svg class="group-hover:text-blue-600 text-gray-400 group-hover:fill-blue-600 fill-white transition-all duration-700 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                                                        stroke="currentColor" />
                                                </svg>
                                            </a>
                                            <div class="px-1 justify-center items-center flex">
                                                <h5 class="group-hover:text-blue-600 text-gray-400 transition-all duration-700 ease-in-out text-sm font-semibold leading-relaxed">4 از 10</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-800 text-sm font-normal leading-snug">
                                    بالاخره تصمیم گرفتم برای خدمات نظافت شما اقدام کنم و حاصل آن رضایت بالایی بود. تیم شما حرفه‌ای بود و خانه من را به شکلی تمیز کردند که حتی زوایا و فضاها را از پیش دیده نبودم. مراقب هستند که هر جزء کوچکی از منزل به صورت کامل رسیدگی شود.
                                </p>
                            </div>
                        </div>

                        <div
                            class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                            <div class="w-full flex-col justify-start items-start gap-3.5 flex">
                                <div class="w-full justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2.5 flex">
                                        <div
                                            class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                            <img class="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710225753.png"
                                                alt="John smith image" />
                                        </div>
                                        <div class="flex-col justify-start items-start gap-1 inline-flex">
                                            <h5 class="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                                            <h6 class="text-gray-500 text-xs font-normal leading-5">5 Day ago</h6>
                                        </div>
                                    </div>
                                    <div class="group justify-end items-center flex">
                                        <div
                                            class="px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-blue-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                                            <a href="" class="">
                                                <svg class="group-hover:text-blue-600 text-gray-400 group-hover:fill-blue-600 fill-white transition-all duration-700 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                                                        stroke="currentColor" />
                                                </svg>
                                            </a>
                                            <div class="px-1 justify-center items-center flex">
                                                <h5 class="group-hover:text-blue-600 text-gray-400 transition-all duration-700 ease-in-out text-sm font-semibold leading-relaxed">4 از 10</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-800 text-sm font-normal leading-snug">
                                    بالاخره تصمیم گرفتم برای خدمات نظافت شما اقدام کنم و حاصل آن رضایت بالایی بود. تیم شما حرفه‌ای بود و خانه من را به شکلی تمیز کردند که حتی زوایا و فضاها را از پیش دیده نبودم. مراقب هستند که هر جزء کوچکی از منزل به صورت کامل رسیدگی شود.
                                </p>
                            </div>
                        </div>

                        <div
                            class="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                            <div class="w-full flex-col justify-start items-start gap-3.5 flex">
                                <div class="w-full justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2.5 flex">
                                        <div
                                            class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                            <img class="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1710225753.png"
                                                alt="John smith image" />
                                        </div>
                                        <div class="flex-col justify-start items-start gap-1 inline-flex">
                                            <h5 class="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                                            <h6 class="text-gray-500 text-xs font-normal leading-5">5 Day ago</h6>
                                        </div>
                                    </div>
                                    <div class="group justify-end items-center flex">
                                        <div
                                            class="px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-blue-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                                            <a href="" class="">
                                                <svg class="group-hover:text-blue-600 text-gray-400 group-hover:fill-blue-600 fill-white transition-all duration-700 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                                                        stroke="currentColor" />
                                                </svg>
                                            </a>
                                            <div class="px-1 justify-center items-center flex">
                                                <h5 class="group-hover:text-blue-600 text-gray-400 transition-all duration-700 ease-in-out text-sm font-semibold leading-relaxed">4 از 10</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-800 text-sm font-normal leading-snug">
                                    بالاخره تصمیم گرفتم برای خدمات نظافت شما اقدام کنم و حاصل آن رضایت بالایی بود. تیم شما حرفه‌ای بود و خانه من را به شکلی تمیز کردند که حتی زوایا و فضاها را از پیش دیده نبودم. مراقب هستند که هر جزء کوچکی از منزل به صورت کامل رسیدگی شود.
                                </p>
                            </div>
                        </div>

                       
                    
                    </div>
                </div>
            </div>
    </section>
</div>
                                            


</template>

<style>

.hexagon {
  aspect-ratio: cos(30deg);
  clip-path: polygon(-50% 50%,50% 100%,150% 50%,50% 0);
  background: #3B8686;
  /* border: 5px solid white; */
}

/* HTML: <div class="hexagon"></div> */
.hexagon2 {
  --b: 10px; /* adjust to control the border  */
 
  aspect-ratio: cos(30deg);
  clip-path: 
    polygon(50% 0,-50% 50%,50% 100%,150% 50%,50% 0,
    50% var(--b),
    calc(100% - var(--b)*sin(60deg)) calc(25% + var(--b)*cos(60deg)),
    calc(100% - var(--b)*sin(60deg)) calc(75% - var(--b)*cos(60deg)),
    50% calc(100% - var(--b)),
    calc(var(--b)*sin(60deg)) calc(75% - var(--b)*cos(60deg)),
    calc(var(--b)*sin(60deg)) calc(25% + var(--b)*cos(60deg)),
    50% var(--b));
  
}




</style>
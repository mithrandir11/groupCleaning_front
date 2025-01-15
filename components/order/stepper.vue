<script setup>
import { useOrderStore } from '~/stores/orderStore';
const orderStore = useOrderStore();
const step = computed(()=> orderStore.step)
</script>

<template>
    <ol class="relative text-gray-600 border-s border-gray-200  mt-3 space-y-14 mr-5 self-start w-56">               
        <li class=" ms-8 flex items-center">            
            <!-- <span class="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 text-white">
                <svg class="w-3.5 h-3.5 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span> -->
            <span :class="{'bg-blue-100 text-blue-500': step>1, 'bg-blue-400 text-white': step==1, 'bg-gray-200': step!=1 && step<1}" class="absolute flex items-center justify-center w-10 h-10  rounded-full -start-5 ">
                1
            </span>
            <p class="text-sm">نوع خدمات</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span :class="{'bg-blue-100 text-blue-500': step>2, 'bg-blue-400 text-white': step==2, 'bg-gray-200': step!=2 && step<2}" class="absolute flex items-center justify-center w-10 h-10  rounded-full -start-5 ">
                2
            </span>
            <p class="text-sm">گزینه های خدمات</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span :class="{'bg-blue-100 text-blue-500': step>3, 'bg-blue-400 text-white': step==3, 'bg-gray-200': step!=3 && step<3}" class="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 ">
                3
            </span>
            <p class="text-sm">توضیحات بیشتر</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span :class="{'bg-blue-100 text-blue-500': step>4, 'bg-blue-400 text-white': step==4, 'bg-gray-200': step!=4 && step<4}" class="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 ">
                4
            </span>
            <p class="text-sm">تاریخ و ساعت درخواستی</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span :class="{'bg-blue-100 text-blue-500': step>5, 'bg-blue-400 text-white': step==5, 'bg-gray-200': step!=5 && step<5}" class="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5  ">
                5
            </span>
            <p class="text-sm">شماره تماس</p>
        </li>
        <li class=" ms-8 flex items-center">
            <span :class="{'bg-blue-100 text-blue-500': step>6, 'bg-blue-400 text-white': step==6, 'bg-gray-200': step!=6 && step<6}" class="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5  ">
                6
            </span>
            <p class="text-sm">ثبت و تایید آدرس</p>
        </li>
        <li class="ms-8 flex items-center">
            <span :class="{'bg-blue-400 text-white': step==7, 'bg-gray-200': step!=7 && step<7}" class="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5  ">
                7
            </span>
            <p class="text-sm">ثبت سفارش</p>
        </li>
    </ol>

</template>
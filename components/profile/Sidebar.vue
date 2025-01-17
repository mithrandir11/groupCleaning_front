<script setup>
const {handleLogout} =useAuth()

</script>
<template>
    
    <div class="w-72 p-4 border rounded-lg flex-col justify-start items-start gap-6 inline-flex self-start">
        <div class="w-full justify-between items-center gap-2.5 inline-flex ">
           
                <p class="font-bold">پروفایل کاربر</p>
           
            <div class="w-6 h-6 relative ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu">
                        <rect width="24" height="24"  />
                        <path id="icon" d="M13 6H21M3 12H21M7 18H21" stroke="#1F2937" stroke-width="1.6" stroke-linecap="round" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="w-full ">
            
            <ul class="flex-col gap-y-4 flex">

                <li>
                    <div class="flex-col gap-1 flex">
                        <NuxtLink :to="{name: 'profile'}" activeClass="bg-gray-200" class="flex-col flex rounded-lg p-3">
                            <div class="h-5 gap-3 flex">
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="User Circle">
                                        <path id="icon" d="M5.5 16C5.5 13.9289 7.51472 12.25 10 12.25C12.4853 12.25 14.5 13.9289 14.5 16M12.25 7.75C12.25 8.99264 11.2426 10 10 10C8.75736 10 7.75 8.99264 7.75 7.75C7.75 6.50736 8.75736 5.5 10 5.5C11.2426 5.5 12.25 6.50736 12.25 7.75ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#6B7280" stroke-width="1.6" />
                                    </g>
                                </svg>
                                </div>
                                <h2 class="text-gray-500 text-sm font-medium leading-snug">اطلاعات کاربر</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </li>
                

                <li>
                    <div class="flex-col gap-1 flex">
                        <NuxtLink :to="{name: 'profile.services'}" activeClass="bg-gray-200" class="flex-col flex rounded-lg p-3">
                            <div class="h-5 gap-3 flex">
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g id="Cube 01">
                                            <path id="icon" d="M2.78223 5.83329C2.52965 6.27072 2.52543 6.80097 2.517 7.86146L2.5 9.99996L2.517 12.1385C2.52543 13.199 2.52965 13.7292 2.78223 14.1666C3.03481 14.6041 3.49196 14.8728 4.40627 15.4104L6.25 16.4943L8.11073 17.5489C9.03347 18.0718 9.49484 18.3333 10 18.3333M2.78223 5.83329C3.03481 5.39587 3.49196 5.12709 4.40627 4.58955L6.25 3.50557L8.11073 2.45104C9.03347 1.9281 9.49484 1.66663 10 1.66663C10.5052 1.66663 10.9665 1.9281 11.8893 2.45104L13.75 3.50557L15.5937 4.58955C16.508 5.12709 16.9652 5.39587 17.2178 5.83329M2.78223 5.83329L10 9.99996M10 18.3333C10.5052 18.3333 10.9665 18.0718 11.8893 17.5489L13.75 16.4943L15.5937 15.4104C16.508 14.8728 16.9652 14.6041 17.2178 14.1666C17.4704 13.7292 17.4746 13.199 17.483 12.1385L17.5 9.99996L17.483 7.86146C17.4746 6.80097 17.4704 6.27072 17.2178 5.83329M10 18.3333V9.99996M17.2178 5.83329L10 9.99996" stroke="#6B7280" stroke-width="1.6" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 class="text-gray-500 text-sm font-medium leading-snug">سرویس های من</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </li>
                
                <li>
                    <div class="flex-col gap-1 flex">
                        <NuxtLink :to="{name: 'profile.addresses'}" activeClass="bg-gray-200" class="flex-col flex rounded-lg p-3">
                            <div class="h-5 gap-3 flex">
                                <div class="relative">
                                    <svg width="20" height="20" viewBox="0 0 25 25" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5035 6.47485C10.3854 6.47485 8.66846 8.19184 8.66846 10.3099C8.66846 12.4279 10.3854 14.1449 12.5035 14.1449C14.6215 14.1449 16.3385 12.4279 16.3385 10.3099C16.3385 8.19184 14.6215 6.47485 12.5035 6.47485ZM10.1685 10.3099C10.1685 9.02027 11.2139 7.97485 12.5035 7.97485C13.793 7.97485 14.8385 9.02027 14.8385 10.3099C14.8385 11.5994 13.793 12.6449 12.5035 12.6449C11.2139 12.6449 10.1685 11.5994 10.1685 10.3099Z" fill="#343C54"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5033 2.83984C8.3766 2.83984 5.03125 6.1852 5.03125 10.3119C5.03125 13.1162 6.1028 15.6692 7.37569 17.7181C8.65084 19.7706 10.1581 21.3657 11.1026 22.2692C11.9045 23.0362 13.139 23.0348 13.9389 22.2653C14.8791 21.3609 16.3778 19.7657 17.6454 17.7137C18.9108 15.6653 19.9754 13.1139 19.9754 10.3119C19.9754 6.1852 16.63 2.83984 12.5033 2.83984ZM6.53125 10.3119C6.53125 7.01362 9.20503 4.33984 12.5033 4.33984C15.8016 4.33984 18.4754 7.01362 18.4754 10.3119C18.4754 12.7374 17.5503 15.0136 16.3692 16.9254C15.1904 18.8336 13.7859 20.3311 12.899 21.1843C12.6788 21.3961 12.3604 21.3966 12.1395 21.1852C11.2483 20.3328 9.83565 18.8352 8.64982 16.9265C7.46175 15.0142 6.53125 12.7375 6.53125 10.3119Z" fill="#343C54"/>
                                    </svg>

                                </div>
                                <h2 class="text-gray-500 text-sm font-medium leading-snug">آدرس های من</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </li>

                <li>
                    <div class="flex-col gap-1 flex">
                        <div class="flex-col flex bg-white rounded-lg p-3">
                            <div class="h-5 gap-3 flex">
                                <div class="relative">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0016 2.00098C12.4158 2.00098 12.7516 2.33676 12.7516 2.75098V3.53801C16.5416 3.9143 19.5016 7.11197 19.5016 11.001V14.115L20.1938 15.9609C20.7454 17.4319 19.6581 19.001 18.0871 19.001H15.0628C15.0287 20.6631 13.6701 21.9995 11.9998 21.9995C10.3295 21.9995 8.97089 20.6631 8.93682 19.001H5.9161C4.34514 19.001 3.25776 17.4319 3.80936 15.9609L4.5016 14.115V11.001C4.5016 7.11197 7.46161 3.9143 11.2516 3.53801V2.75098C11.2516 2.33676 11.5874 2.00098 12.0016 2.00098ZM10.4375 19.001C10.471 19.8339 11.1573 20.4995 11.9998 20.4995C12.8423 20.4995 13.5286 19.8339 13.5622 19.001H10.4375ZM6.0016 11.001C6.0016 7.68727 8.68789 5.00098 12.0016 5.00098C15.3153 5.00098 18.0016 7.68727 18.0016 11.001V14.1168C18.0016 14.2955 18.0337 14.4727 18.0965 14.64L18.7893 16.4876C18.9732 16.9779 18.6108 17.501 18.0871 17.501H5.9161C5.39244 17.501 5.02998 16.9779 5.21385 16.4876L5.90673 14.64C5.96946 14.4727 6.0016 14.2955 6.0016 14.1168V11.001Z" fill="#343C54"/>
                                    </svg>

                                </div>
                                <h2 class="text-gray-500 text-sm font-medium leading-snug">اعلانات</h2>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="flex-col gap-1 flex">
                        <button @click="handleLogout()" type="button" class="flex-col flex bg-white rounded-lg p-3">
                            <div class="h-5 gap-3 flex">
                                <div class="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g id="Logout">
                                            <path id="icon" d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V14.1667L2.5 5.83333V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 class="text-gray-500 text-sm font-medium leading-snug">خروج</h2>
                            </div>
                        </button>
                    </div>
                </li>

                
            </ul>
        </div>  
    </div>
        
</template>
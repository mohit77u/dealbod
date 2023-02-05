<template>
    <div class="py-10 bg-gray-100">
        <div class="container mx-auto ms:px-0 px-4">
            <h1 class="text-black mb-8 text-[26px] font-bold">Marketplace</h1>

            <!-- main grid -->
            <div class="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-1 gap-5 mb-5 mt-10">
                <!-- left -->
                <div class="left-main lg:col-span-2 md:col-span-2 col-span-1">
                    <div class="main-left border border-gray-200 bg-white rounded-md">
                        <!-- main top -->
                        <div class="main-top flex justify-between items-center p-5">
                            <div class="left">
                                <h2 class="text-black text-[20px] font-bold">Filters</h2>
                            </div>
                            <div class="right">
                                <button class="rounded text-gray-700 text-[14px] flex items-center gap-2">
                                    Clear All
                                    <img src="/images/close-square.svg" alt="close">
                                </button>
                            </div>
                        </div>
                        <!-- main -->
                        <div class="main px-5 pb-5">
                            <!-- sort filter -->
                            <p class="text-gray-700 text-[16px]">Sort</p>
                            <!-- sort option -->
                            <div class="sort-options my-5">
                                <div class="flex items-center py-2" v-for="(option, index) in sortOptions" :key="index">
                                    <input :id="option + '_' + index" type="checkbox" :value="option" name="sort" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label :for="option + '_' + index" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{option}}</label>
                                </div>
                            </div>

                            <!-- Industry Type -->
                            <p class="text-gray-700 text-[16px] mt-4">Industry Type</p>
                            <!-- sort option -->
                            <div class="sort-options my-5">
                                <div class="flex items-center py-2" v-for="(option, index) in industryOptions" :key="index">
                                    <input :id="option + '_' + index" type="checkbox" :value="option" name="sort" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label :for="option + '_' + index" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{option}}</label>
                                </div>
                            </div>

                            <!-- Listing Type -->
                            <p class="text-gray-700 text-[16px] mt-4">Listing Type</p>
                            <!-- sort option -->
                            <div class="sort-options my-5">
                                <div class="flex items-center py-2" v-for="(option, index) in listingOptions" :key="index">
                                    <input :id="option + '_' + index" type="checkbox" :value="option" name="sort" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label :for="option + '_' + index" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{option}}</label>
                                </div>
                            </div>

                            <!-- Price -->
                            <p class="text-gray-700 text-[16px] mt-4">Price</p>
                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 my-5">
                                <div class="form-group">
                                    <label class="block mb-2 text-[14px] text-gray-700 font-medium">Minimum Range</label>
                                    <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="₦ 10,000">
                                </div>
                                <div class="form-group">
                                    <label class="block mb-2 text-[14px] text-gray-700 font-medium">Maximum Range</label>
                                    <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="₦ 1,000,000">
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- blue bg box -->
                    <div class="box bg-gradient-to-r from-[#4481EB] to-[#04BEFE] p-5 rounded-md my-7">
                        <h4 class="text-white text-[20px] mb-4 font-semibold">Refer Investors and Businesses and Earn Major Rewards</h4>
                        <button class="text-blue-600 text-[14px] px-12 py-3 rounded bg-white font-semibold inline-block my-4">Learn More</button>
                    </div>
                </div>
                <!-- right -->
                <div class="right-main lg:col-span-5 md:col-span-3 col-span-1">
                    <div class="border border-gray-100">
                        <!-- search -->
                        <div class="form-group mb-5">
                            <div class="input relative">
                                <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full py-3 pl-14" placeholder="Search">
                                <img src="/images/search.svg" alt="search" class="absolute left-5 top-[13px]">
                            </div>
                        </div>

                        <!-- content -->
                        <div class="main-search-content">
                            <div class="single bg-white p-8 rounded w-full mb-5" v-for="(result, index) in 3" :key="index">
                                <div class="flex justify-between lg:flex-row flex-col gap-4 items-start">
                                    <div class="left-top-bar lg:w-9/12">
                                        <div class="flex gap-4">
                                            <div class="icon">
                                                <img src="/images/frame.svg" alt="frame">
                                            </div>
                                            <div class="title-details">
                                                <h4 class="text-black text-[20px] font-semibold">Saas Startup</h4>
                                                <div class="flex sm:flex-row flex-col gap-4 mt-4">
                                                    <div class="inline-flex items-center gap-2">
                                                        <img src="/images/map.svg" alt="map">
                                                        <p class="text-gray-700 text-[14px] font-medium">Abuja</p>
                                                    </div>
                                                    <div class="inline-flex items-center gap-2">
                                                        <img src="/images/time.svg" alt="time">
                                                        <p class="text-gray-700 text-[14px] font-medium">1 hour ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-btns flex items-center gap-5">
                                        <button class="block py-3 px-8 bg-lightGray text-primaryPurple rounded">Platinum</button>
                                        <button class="">
                                            <img src="/images/platinum.svg" alt="platinum">
                                        </button>
                                    </div>
                                </div>

                                <p class="text-gray-700 text-[14px] leading-7 my-6">24-hour discount deals eCommerce marketplace, on both Windows and Mac software. Profitable marketplace with $82,000 in TTM revenue and $32,000 in TTM profit that offers 24-hour discount deals, on both Windows and Mac</p>

                                <!-- other details -->
                                <div class="other-details py-5 mb-5 border-y-2 border-gray-100" v-if="showOtherDetails == 'result_' + index">
                                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">

                                        <div class="flex items-start justify-between gap-5 sm:flex-row flex-col">

                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">TTM gross revenue</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/briefcase.svg" alt="breficase">
                                                    <h5 class="text-black text-[14px]">₦850,000</h5>
                                                </div>
                                            </div>

                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">TTM net profit</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/activity.svg" alt="activity">
                                                    <h5 class="text-black text-[14px]">₦350,000</h5>
                                                </div>
                                            </div>

                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">Asking price</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/wallet.svg" alt="wallet">
                                                    <h5 class="text-black text-[14px]">₦620,000</h5>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="flex items-start justify-between gap-2 sm:flex-row flex-col">
                                            
                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">No of Customers</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/walk.svg" alt="walk">
                                                    <h5 class="text-black text-[14px]">1500</h5>
                                                </div>
                                            </div>

                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">Date Founded</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/calendar.svg" alt="calendar">
                                                    <h5 class="text-black text-[14px]">Jan 1, 2020</h5>
                                                </div>
                                            </div>

                                            <div class="single">
                                                <p class="text-[12px] text-gray-500 mb-3">Startup Team</p>
                                                <div class="flex items-center gap-2">
                                                    <img src="/images/icons/startup.svg" alt="startup">
                                                    <h5 class="text-black text-[14px]">12</h5>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- bottom btns -->
                                <div class="flex lg:flex-row md:flex-col sm:flex-row flex-col gap-5">
                                    <button class="py-3 sm:px-14 px-3 bg-primaryPurple text-white rounded">View Listing</button>

                                    <!-- show button -->
                                    <button class="py-3 sm:px-14 px-3 bg-lightGray text-black rounded font-semibold flex items-center justify-center gap-4" @click="showOtherDetails = 'result_' + index" v-if="showOtherDetails != 'result_' + index">
                                        Show More Details
                                        <img src="/images/eye.svg" alt="eye">
                                    </button>

                                    <!-- hide button -->
                                    <button class="py-3 sm:px-14 px-3 bg-lightGray text-black rounded font-semibold flex items-center justify-center gap-4" @click="showOtherDetails = ''" v-else>
                                        Hide Details
                                        <img src="/images/eye-off.svg" alt="eye-off">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyListing',
    data(){
        return {
            sortOptions: [
                'Newest',
                'Most Recent',
                'Oldest',
                'Custom Sort',
            ],
            industryOptions: [
                'Saas',
                'Agritech',
                'E-commerce',
                'Marine Farming',
            ],
            listingOptions: [
                'Prestige',
                'Premium',
            ],
            showOtherDetails: '',
        }
    },
    methods: {

    }
}
</script>
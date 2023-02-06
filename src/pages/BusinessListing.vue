<template>
    <div class="business-listing py-10">
        <div class="container mx-auto w-[90%] md:w-full">
            <div class="back-btn bg-white py-2.5 px-4 flex items-center gap-1 justify-center w-[100px] rounded cursor-pointer">
                <img src="/images/icons/arrow-left.svg" alt="back">
                <span>Back</span>
            </div>

            <!-- top bar -->
            <div class="bg-[#ECECEC] p-5 py-4 my-5 mt-10 rounded-[6px] flex md:items-center justify-between md:flex-row flex-col gap-4 w-full">
                <div class="flex items-center gap-4 md:w-8/12 w-full">
                    <img src="/images/info-circle.svg" alt="info">
                    <p class="text-gray-700 text-[16px]">Good afternoon, Adesewa. Seems like your profile is missing a few details. Kindly complete your profile set-up to gain all premium access to what Dealbod has to offer.</p>
                </div>
                <div class="flex items-center gap-4">
                    <button class="bg-black w-auto text-white text-[14px] py-3 rounded-[6px] px-7">Complete Profile Setup</button>
                    <button>
                        <img src="/images/close-circle.svg" alt="close-icon" class="ml-2">
                    </button>
                </div>
            </div>

            <!-- main grid -->
            <div class="grid lg:grid-cols-5 grid-cols-1 gap-5 mb-5 mt-10">
                <!-- left -->
                <div class="left-main lg:col-span-3 col-span-1">
                    <div class="bg-white border border-gray-200 rounded">
                        <!-- main top -->
                        <div class="main-top flex flex-col md:flex-row justify-between items-start py-8 p-5">
                            <div class="left lg:w-10/12 pr-2">
                                <h2 class="text-black mb-3 text-[16px] font-bold">Summary</h2>
                                <p class="text-gray-500 leading-7 text-[14px]">Lorem ipsum dolor sit amet consectetur. Aenean et facilisis egestas iaculis pellentesque dignissim imperdiet.</p>
                            </div>
                            <div class="right flex items-center md:mt-0 mt-2">
                                <button class="bg-white px-2 py-2 rounded border border-gray-200">
                                    <img src="/images/more-vertical.svg" alt="more">
                                </button>
                            </div>
                        </div>

                        <div class="main-top flex flex-col md:flex-row justify-between items-start py-2 p-5">
                            <div class="left lg:w-10/12 pr-2">
                                <p class="text-gray-500 leading-7 text-[12px] mb-2.5">Asking Price</p>
                                <div class="inline-flex items-center gap-x-4 gap-y-2">
                                    <img src="/images/map.svg" alt="map">
                                    <h4 class="text-black font-bold text-[16px] ml-3">₦345k</h4>
                                    <p class="text-gray-500 leading-7 text-[14px]">3 x 2 Revenue Stream</p>
                                </div>
                            </div>
                            <div class="right flex items-center md:mt-0 mt-2">
                                <button class="flex justify-center items-center gap-2 py-3 px-6 bg-lightGray text-primaryPurple rounded">
                                    <img src="/images/icons/icon_diamond-outline.svg" alt="icon_diamond-outline">
                                    Platinum
                                </button>
                            </div>
                        </div>

                        <!-- main -->
                        <div class="main p-5">
                            <p class="text-gray-700 text-[14px] font-medium mb-4">Asking Price Reasoning</p>
                            <p class="text-gray-500 leading-7 text-[14px]">Lorem ipsum dolor sit amet consectetur. Aenean et facilisis egestas iaculis pellentesque dignissim imperdiet.</p>

                            <!-- dates and size -->
                            <div class="flex items-start gap-4 my-4">
                                <div class="calendar">
                                    <p class="text-gray-500 leading-7 text-[12px] mb-3 font-semibold">Date Founded</p>
                                    <div class="inline-flex items-center gap-2">
                                        <img src="/images/icons/calendar.svg" alt="calendar">
                                        <p class="text-black text-[14px] font-medium">18 Dec, 2022</p>
                                    </div>
                                </div>

                                <div class="size">
                                    <p class="text-gray-500 leading-7 text-[12px] mb-3 font-semibold">Startup Size</p>
                                    <div class="inline-flex items-center gap-2">
                                        <img src="/images/icons/startup.svg" alt="startup">
                                        <p class="text-black text-[14px] font-medium">20</p>
                                    </div>
                                </div>
                            </div>

                            <div class="main-content mt-12">
                                <!-- heading -->
                                <div class="flex items-center gap-4">
                                    <h5 class="text-[#4B4B4B] font-semibold text-[16px]">
                                        Marketplace Startup
                                    </h5>
                                    <div class="inline-flex items-center gap-2 ml-4">
                                        <img src="/images/map.svg" alt="map">
                                        <p class="text-gray-700 text-[14px] font-medium ml-1">Abuja</p>
                                    </div>
                                </div>

                                <p class="text-gray-500 leading-7 text-[14px] my-5 lg:w-10/12 w-full">Lorem ipsum dolor sit amet consectetur. A sem ornare nunc at dis egestas. Scelerisque rhoncus nec proin vitae venenatis ultrices. Praesent placerat suspendisse feugiat elementum. Erat arcu gravida eget neque tincidunt. Sodales id donec viverra diam.</p>

                                <div class="features">
                                    <ul>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Leverage automation to move fast</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Always give customers a human to chat to</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>

                                    </ul>
                                </div>

                                <!-- heading -->
                                <div class="flex items-center gap-4 my-7">
                                    <h5 class="text-[#4B4B4B] font-semibold text-[16px]">
                                        Company Overview
                                    </h5>
                                </div>
                                <h6 class="text-[#656565] font-semibold text-[14px]">Business Model and Pricing</h6>

                                <p class="text-gray-500 leading-7 text-[14px] my-5 lg:w-10/12 w-full">Lorem ipsum dolor sit amet consectetur. Purus vitae ullamcorper quis fusce. Risus fringilla dictum leo pulvinar ac.</p>

                                <h6 class="text-[#656565] font-semibold text-[14px] mt-3">Teck Stack</h6>

                                <p class="text-gray-500 leading-7 text-[14px] my-5 lg:w-10/12 w-full">Lorem ipsum dolor sit amet consectetur. Purus vitae ullamcorper quis fusce. Risus fringilla dictum leo pulvinar ac.</p>

                                <div class="features">
                                    <h6 class="text-[#656565] font-semibold text-[14px] my-3">Product Competitors</h6>
                                    <ul>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Leverage automation to move fast</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Always give customers a human to chat to</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>

                                    </ul>
                                </div>

                                
                                <div class="features my-5">
                                    <h6 class="text-[#656565] font-semibold text-[14px] my-3">Growth Opportunities</h6>
                                    <p class="text-gray-500 leading-7 text-[14px] my-5 lg:w-10/12 w-full">Lorem ipsum dolor sit amet consectetur. Velit molestie nunc lorem varius morbi euismod odio augue id. Massa arcu eget risus tellus diam ultricies pellentesque faucibus eu. Sed dui tortor posuere nec commodo eget. Iaculis nulla senectus dui mauris enim magna congue. Diam ut urna sit egestas. Fusce urna leo pellentesque scelerisque est nulla bibendum.</p>
                                    <ul>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Leverage automation to move fast</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Always give customers a human to chat to</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>
                                        <li class="flex items-center gap-5 py-2">
                                            <img src="/images/icons/purple-check.svg" alt="checkmark">
                                            <span class="text-gray-500 text-[14px]">Automate customer support and close leads faster</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="right-main lg:col-span-2 col-span-1">
                    <div class="main-right">
                        <!-- main top -->
                        <div class="main-top flex gap-5 items-start py-8 bg-white p-5 rounded">
                            <div class="left">
                                <img src="/images/icons/frame-img.svg" alt="frame-img">
                            </div>
                            <div class="right">
                                <h3 class="text-black text-[14px] font-semibold mb-2.5">Saas Startup</h3>
                                <ul>
                                    <li class="flex items-start gap-3 pb-2.5">
                                        <img src="/images/icons/mail.svg" alt="mail">
                                        <span class="text-[#212121] text-[14px]">Bethel_Windler63@gmail.com</span>
                                    </li>
                                    <li class="flex items-start gap-3 pb-2.5">
                                        <img src="/images/icons/phone.svg" alt="phone">
                                        <span class="text-[#212121] text-[14px]">+234-703-269-9233</span>
                                    </li>
                                    <li class="flex items-start gap-3 pb-2.5">
                                        <img src="/images/icons/location.svg" alt="location">
                                        <span class="text-[#212121] text-[14px]">72375 Christa Forest Apt. 372, Pontiac, Texas, 81912-9064</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button class="flex mb-5 w-full justify-center items-center gap-2 py-3 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                            Contact Seller
                            <img src="/images/icons/chevron-right.svg" alt="chevron-right">
                        </button>

                        <div class="py-8 bg-white p-5 rounded">
                            <h3 class="text-black text-[14px] font-bold mb-2.5">Get Access to this listing and many others</h3>
                            <p class="text-gray-700 leading-7 text-[14px] mt-3">Lorem ipsum dolor sit amet consectetur. Mi porta posuere porta odio faucibus. Sit dolor et vulputate morbi pellentesque ultricies habitant bibendum. Dignissim elementum parturient amet mus orci rhoncus. Id quis eu feugiat interdum nec.</p>
                        </div>

                        <button class="flex my-5 w-full justify-center items-center gap-2 py-3 px-6 bg-primaryPurple text-white rounded">
                            Upgrade your account
                        </button>

                        <div class="py-8 bg-white p-5 rounded">
                            <h3 class="text-black text-[14px] font-bold mb-2.5">Request Access </h3>
                            <p class="text-gray-700 leading-7 text-[14px] mt-3">This business has made their business details private. But you can get access to view it just by showing some intent via a message. Sample the example below.</p>
                            <div class="bg-[#F6F6F6] p-3 rounded mt-4">
                                <p class="text-[#656565] leading-7 text-[12px]">“ Lorem ipsum dolor sit amet consectetur. Sed consequat ornare enim mauris mauris amet nec. Eget etiam pretium odio velit amet etiam porta non amet. ”</p>
                            </div>

                            <textarea placeholder="Enter Your Message Here" cols="30" rows="7" class="border border-gray-200 rounded w-full mt-5 text-[14px]"></textarea>

                            <button class="flex my-5 w-full justify-center items-center gap-2 py-3 px-6 bg-primaryPurple text-white rounded">
                                Send Message
                            </button>
                        </div>

                        <!-- four grids -->
                        <div class="pt-5 pb-3 bg-white p-5 rounded my-8">
                            <h3 class="text-black text-[14px] font-bold mb-2.5">Financials</h3>
                            <p class="text-gray-700 leading-7 text-[14px] mt-3">Your past and project financial performance</p>
                            
                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 my-5">
                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/briefcase-blue.svg" alt="briefcase" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">TTM Gross Revenue</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦234K</h4>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/profit.svg" alt="profit" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">TTM Net Profit</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦23K</h4>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/revenue.svg" alt="revenue" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">Last Month Gross Revenue</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦234K</h4>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/net-profit.svg" alt="net-profit" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">Last Month Gross Revenue</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦234K</h4>
                                </div>

                            </div>
                            
                        </div>

                        <!-- three grids -->
                        <div class="pt-5 pb-3 bg-white p-5 rounded my-8">
                            <h3 class="text-black text-[14px] font-bold mb-2.5">Metrics</h3>
                            <p class="text-gray-700 leading-7 text-[14px] mt-3">Connected Performance Metrics updated realtime</p>
                            
                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 my-5">
                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/customers.svg" alt="customers" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">Customers</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦234K</h4>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded">
                                    <img src="/images/icons/growth-rate.svg" alt="growth-rate" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">Annual Growth Rate</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦23K</h4>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center gap-y-3 py-4 px-6 bg-[#F9F3FD] text-primaryPurple rounded col-span-2">
                                    <img src="/images/icons/recc-revenue.svg" alt="recc-revenue" class="mx-auto">
                                    <p class="text-gray-700 leading-4 text-[12px] text-center">Annual Recurring Revenue</p>
                                    <h4 class="text-black text-[22px] text-center font-bold">₦234K</h4>
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
    name: 'BusinessListing',
    data() {
        return {

        }
    }, 
    methods: {

    }
}
</script>
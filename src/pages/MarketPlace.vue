<template>
    <div class="py-10 bg-white">
        <div class="container mx-auto">
            <h1 class="text-black mb-8 text-[26px] font-bold">Your Startup</h1>
            <!-- top grid -->
            <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div class="flex items-center justify-between border border-gray-100 rounded p-5">
                    <div class="w-7/12 left-content pr-5">
                        <h3 class="text-black text-[16px] font-bold">Your Listing is 25% complete</h3>
                        <p class="text-gray-500 leading-7 text-[14px] mt-3">Lorem ipsum dolor sit amet consectetur. Gravida ultrices cursus a nunc lectus dolor morbi tellus odio. Vitae id</p>
                    </div>
                    <button class="w-5/12 bg-gray-300 px-5 py-2 rounded text-gray-500 text-[16px] font-semibold">Complete Your listing</button>
                </div>
                <div class="flex items-center justify-between border border-gray-100 rounded p-5">
                    <div class="w-7/12 left-content pr-5">
                        <h3 class="text-black text-[16px] font-bold">Browse Marketplace</h3>
                        <p class="text-gray-500 leading-7 text-[14px] mt-3">Lorem ipsum dolor sit amet consectetur. Gravida ultrices cursus a nunc lectus dolor morbi tellus odio. Vitae id</p>
                    </div>
                    <button class="w-5/12 bg-gray-300 px-5 py-2 rounded text-gray-500 text-[16px] font-semibold">Complete Your listing</button>
                </div>
            </div>

            <!-- main grid -->
            <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-5 mb-5 mt-20">
                <div class="left-main lg:col-span-3 md:col-span-1">
                    <div class="border border-gray-100">
                        <!-- main top -->
                        <div class="main-top flex justify-between items-start py-8 border-b-2 border-gray-300 p-5">
                            <div class="left lg:w-7/12 pr-2">
                                <h2 class="text-black mb-2 text-[26px] font-bold">Summary</h2>
                                <p class="text-gray-500 leading-7 text-[14px]">A simple introduction of your start-up will do in this section</p>
                            </div>
                            <div class="right flex items-center">
                                <button class="bg-gray-300 px-5 py-2 rounded text-gray-500 text-[16px] font-semibold">Draft</button>
                                <button class="bg-white px-2 py-2 rounded border border-gray-200 ml-5">
                                    <img src="/images/more-vertical.svg" alt="more">
                                </button>
                            </div>
                        </div>
                        <!-- main -->
                        <div class="main p-10">
                            <div class="flex items-center justify-between bg-lightGray rounded px-5 py-8 mb-5">
                                <div class="w-6/12 left-content pr-5">
                                    <h3 class="text-black text-[16px] font-bold">Tell Us About Your Startup</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mt-3">What Buyers would need to </p>
                                </div>
                                <button class="w-6/12 bg-primaryPurple px-5 py-3 shadow-primary rounded text-white text-[16px] font-semibold">Add Information</button>
                            </div>
                            <div class="flex items-center justify-between bg-lightGray rounded px-5 py-8 mb-5">
                                <div class="w-6/12 left-content pr-5">
                                    <h3 class="text-black text-[16px] font-bold">Company Overview</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mt-3">What Buyers would need to </p>
                                </div>
                                <button class="w-6/12 bg-primaryPurple px-5 py-3 shadow-primary rounded text-white text-[16px] font-semibold">Add Information</button>
                            </div>
                            <div class="flex items-center justify-between bg-lightGray rounded px-5 py-8 mb-5">
                                <div class="w-6/12 left-content pr-5">
                                    <h3 class="text-black text-[16px] font-bold">Acquisition Details</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mt-3">What Buyers would need to </p>
                                </div>
                                <button class="w-6/12 bg-white px-1 py-3 shadow-primary rounded text-primaryPurple text-[16px] font-semibold flex justify-center gap-2">
                                    <img src="/images/star.svg" alt="star">
                                    Premium Access Required
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- documents -->
                    <div class="border border-gray-100 mt-10">
                        <!-- main top -->
                        <div class="main-top flex justify-between items-start py-8 border-b-2 border-gray-300 p-5">
                            <div class="left lg:w-9/12 pr-2">
                                <h2 class="text-black mb-2 text-[26px] font-bold">Upload Document</h2>
                                <p class="text-gray-500 leading-7 text-[14px]">Kindly provide the following document so we can accredited your business.</p>
                            </div>
                            <div class="right flex items-center">
                                <button class="bg-white px-2 py-2 rounded border border-gray-200 ml-5">
                                    <img src="/images/more-vertical.svg" alt="more">
                                </button>
                            </div>
                        </div>
                        <!-- main -->
                        <div class="main p-10">
                            <div class="flex items-center justify-between bg-lightGray rounded px-5 py-8 mb-5">
                                <div class="w-6/12 left-content pr-5">
                                    <h3 class="text-black text-[16px] font-bold">CAC</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mt-3">What Buyers would need to </p>
                                </div>
                                <button class="w-6/12 bg-primaryPurple px-5 py-3 shadow-primary rounded text-white text-[16px] font-semibold">Add Files</button>
                            </div>
                            <div class="flex items-center justify-between bg-lightGray rounded px-5 py-8 mb-5">
                                <div class="w-6/12 left-content pr-5">
                                    <h3 class="text-black text-[16px] font-bold">Pitch Deck</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mt-3">What Buyers would need to </p>
                                </div>
                                <button class="w-6/12 bg-primaryPurple px-1 py-3 shadow-primary rounded text-white text-[16px] font-semibold flex justify-center gap-2">
                                    <img src="/images/star-white.svg" alt="star">
                                    Premium Access Required
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="right-main lg:col-span-2 md:col-span-1 border border-gray-100">
                    <div class="main-right">
                        <!-- main top -->
                        <div class="main-top flex justify-between items-start py-8 border-b-2 border-gray-300 p-5">
                            <div class="left">
                                <h2 class="text-black mb-2 text-[20px] font-bold">Private Information</h2>
                                <p class="text-gray-500 leading-7 text-[14px]">Kindly provide the following document so we can accredited your business.</p>
                            </div>
                        </div>
                        <div class="main-top flex justify-between items-start py-8 border-b-2 border-gray-300 p-5">
                            <div class="left lg:w-9/12 pr-2">
                                <h2 class="text-black mb-2 text-[16px] font-bold">Auto-Access Approval</h2>
                                <p class="text-gray-500 leading-7 text-[14px]">Kindly provide the following document so we can accredited your business.</p>
                            </div>
                            <div class="right flex items-center">
                                <button class="bg-white">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </button>
                            </div>
                        </div>

                        <!-- main -->
                        <div class="main p-10">
                            <div class="bg-lightGray rounded px-5 py-8 mb-5 text-center">
                                <h3 class="text-black text-[16px] font-bold">Tell Us About Yourself</h3>
                                <p class="text-gray-500 leading-7 text-[14px] mb-5 mt-3">Let’s get to Know More About You</p>
                                <button class="w-9/12 bg-primaryPurple px-10 py-3 shadow-primary rounded text-white text-[16px] font-semibold">Add Information</button>
                            </div>

                            <div class="link">
                                <div class="flex justify-between items-center mb-5">
                                    <h3 class="text-black text-[16px] font-bold">Startup Details</h3>
                                    <p class="text-gray-500 leading-7 text-[14px] mb-5 mt-3 underline underline-offset-2 cursor-pointer">Edit Info</p>
                                </div>
                                <p class="text-gray-500 leading-7 text-[14px] my-3">Startup Site</p>
                                <p class="text-primaryPurple leading-7 text-[14px] my-3 flex items-center gap-2 font-semibold">
                                    Link 
                                    <img src="/images/link.svg" alt="link">
                                </p>
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
    name: 'MarketPlace',
}
</script>
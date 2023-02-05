<template>
    <div>
        <div class="upgrade fixed top-0 left-0 bg-[#C5C5C5]/50 w-full h-full py-28 z-20 overflow-y-auto">
            <div class="container mx-auto bg-white p-10 py-16 rounded relative" v-if="!paymentPopup">
                <!-- close icon -->
                <div class="text-right cursor-pointer" @click="closePopup()">
                    <img src="/images/close-circle.svg" alt="close-icon" class="ml-auto">
                </div>
                <!-- heading -->
                <h2 class="text-black mb-2 text-[20px] font-bold text-center">Get Started with Flexible Premium Plans</h2>
                <p class="text-gray-500 leading-7 text-[14px] text-center my-4">We conduct our evaluation and due diligence that evaluates skills & behaviors <br> correlated with entrepreneurial success.</p>
                <!-- plan details card -->
                <div class="plan-details mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-12">
                    <div :class="[plan.recommended ? 'border-primaryPurple' : 'border-white', 'card border min-h-[650px] relative p-6 shadow-primary bg-white rounded']" v-for="(plan, index) in planDetails" :key="index">
                        <!-- top recommended -->
                        <div class="text-center absolute top-[-20px] left-0 w-full z-50" v-if="plan.recommended">
                            <button class="sm:w-6/12 w-10/12 bg-[#D3A4EE] px-5 py-2 shadow-primary rounded-md text-black text-[16px] font-semibold">Recommended</button>
                        </div>
                        <div class="card-top py-6 flex justify-between">
                            <div class="icon w-4/12">
                                <img :src="'/images/' + plan.icon" :alt="plan.name">
                            </div>
                            <div class="plan-name-price w-8/12">
                                <h3 class="text-black mb-2 text-[16px] font-bold text-right">{{plan.name}}</h3>
                                <h2 class="text-black text-[26px] text-right font-extrabold">{{plan.price}}</h2>
                            </div>
                        </div>
                        <!-- features -->
                        <div class="features mt-6">
                            <ul>
                                <li class="flex items-start gap-5 py-2" v-for="(feature, index) in plan.features" :key="index">
                                    <img src="/images/checkmark.svg" alt="checkmark">
                                    <span class="text-[#1E1E1E] text-[14px]">{{feature}}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- bottom button -->
                        <div class="text-center absolute bottom-10 left-0 w-full">
                            <button class="sm:w-6/12 w-10/12 bg-primaryPurple px-5 py-3 shadow-primary rounded text-white text-[16px] font-semibold" @click="paymentPopup = true">Choose Plan</button>
                        </div>
                    </div>
                </div>

            </div>
            <!-- payment popup -->
            <div class="mx-auto sm:w-[600px] w-[300px] bg-white p-10 py-16 rounded relative" v-else>
                <div class="icon">
                    <img src="/images/check.svg" alt="check" class="mx-auto">
                </div>
                <h1 class="text-center text-black font-bold text-[26px] mb-4">Payment Confirmed</h1>
                <p class="text-gray-500 leading-7 text-[14px] text-center my-4">Your payment was successful. Please log in again to view new changes made to your account.</p>
                <div class="text-center">
                    <button class="sm:w-9/12 w-11/12 bg-primaryPurple px-5 py-3 shadow-primary rounded text-white text-[16px] font-semibold" @click="closePopup()">Log Into Your Account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UpgradePopup',
        data(){
            return {
                paymentPopup: false,
                planDetails: [
                    {
                        name: 'Standard Plan',
                        price: '₦5,000',
                        icon: 'icon-1.svg',
                        features: [
                            'Dealbod Verification Badge',
                            'Business Verification',
                            'Contact verification',
                            'Contact verification',
                        ],
                        recommended: false,
                    },
                    {
                        name: 'Prestige Plan',
                        price: '₦20,000',
                        icon: 'icon-2.svg',
                        features: [
                            'All Standard Plan Features',
                            'Priority listing',
                            'Privacy control',
                            'Business Health check',
                            'One Page Buesiness Plan',
                            'NDA Auto-Generated',
                        ],
                        recommended: true,
                    },
                    {
                        name: 'Premium Plan',
                        price: '₦50,000',
                        icon: 'icon-3.svg',
                        features: [
                            'All Prestiege Plan Features',
                            'Spotlight Listing',
                            'Premium Visibility to Investors',
                            'Business Plan Creation',
                            'Pitch Creation',
                            'File Upload (Data Room)',
                            'Business Plan Template',
                        ],
                        recommended: false,
                    },
                ],
            }
        },
        methods: {
            closePopup(){
                this.paymentPopup = false
                this.$emit('upgradeShow', false)
            }
        }
    }
</script>
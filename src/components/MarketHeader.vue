<template>
    <div>
        <nav class="bg-white border-gray-200 px-2 sm:px-4 border-b rounded dark:bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div class="flex items-center gap-2">
                    <router-link to="/" class="flex items-center">
                        <img src="/images/logo.svg" class="" alt="Logo" />
                    </router-link>
                    <ul class="flex flex-col px-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <router-link to="/market-place" class="block px-5 py-8 text-primaryPurple border-b-2 border-primaryPurple">Marketplace</router-link>
                        </li>
                        <li>
                            <router-link to="/my-listing" class="block px-5 py-8 text-gray-500 relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-red before:right-0 before:top-6">My Listing</router-link>
                        </li>
                    </ul>
                </div>
                <!-- toggle button -->
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <!-- main menu bar -->
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col items-center px-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <router-link to="/" class="block py-3 rounded">
                                <img src="/images/notification.svg" alt="notification">
                            </router-link>
                        </li>
                        <li>
                            <button class="block py-3 px-6 bg-lightGray text-primaryPurple rounded" @click="upgradePopup = true">Upgrade</button>
                        </li>
                        <li class="relative">
                            <button class="flex gap-3 items-center">
                                <img src="/images/user.svg" alt="user">
                                <img src="/images/chevron-down.svg" alt="chevron-down">
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- upgrade popup -->
        <UpgradePopup v-if="upgradePopup" @upgradeShow="upgradeShow" />
    </div>
</template>

<script>
    import UpgradePopup from './UpgradePopup.vue';
    export default {
        name: 'MarketHeader',
        components: {
            UpgradePopup,
        },
        data(){
            return {
                upgradePopup: false,
            }
        },
        methods: {
            upgradeShow(value){
                this.upgradePopup = value
            },
        }
    }
</script>
<template> 
    <nav class="bg-white border-gray-200 px-2 sm:px-4 sm:py-2 py-3 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <router-link to="/" class="flex items-center">
                <img src="/images/logo.svg" class="" alt="Logo" />
            </router-link>
            <!-- toogle menu -->
            <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  @click="mobileMenu = !mobileMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <!-- main menu -->
            <div :class="[mobileMenu ? 'mobile-menu' : 'hidden', 'w-full md:block md:w-auto']" @click="mobileMenu = false">
                <ul class="flex flex-row p-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 gap-2">
                    <li>
                        <router-link to="/" class="block py-3 px-6 bg-lightGray text-primaryPurple rounded">Sign Up</router-link>
                    </li>
                    <li>
                        <router-link to="/login" class="block py-3 px-6 bg-primaryPurple text-white rounded">Log In</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data(){
            return {
                mobileMenu: false,
            }
        }
    }
</script>
<template>
    <div class="flex justify-center items-center py-10">
        <div class="signup-form bg-white shadow-primary rounded-md p-10 md:w-[600px]">
          <h1 class="text-[26px] mb-4 font-bold text-center">Create An Account.</h1>
          <p class="text-center text-gray-500 text-[14px]">Hi there, Welcome to Dealbod. Let’s get your account set-up</p>
  
          <!-- form -->
          <form class="mt-8">
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] font-semibold">What is your primary goal for using Workflo?</label>
              <div class="flex mt-5">
                  <div class="flex items-center mr-4">
                      <input id="business" type="radio" value="business" name="goal" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="business" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have a business</label>
                  </div>
                  <div class="flex items-center mr-4">
                      <input id="invest" type="radio" value="invest" name="goal" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="invest" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to invest in Businesses</label>
                  </div>
              </div>
  
            </div>
  
            <!-- email -->
            <div class="form-group mb-5">
              <label for="email" class="block mb-2 text-[14px] text-gray-700 font-medium">Email</label>
              <div class="input relative">
                <input type="email" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your email">
                <img src="/images/tooltip-icon.svg" alt="tooltip" class="absolute right-4 top-[13px]">
              </div>
              <div class="note flex gap-4 items-start mt-2">
                <img src="/images/info-circle.svg" alt="info">
                <p class="text-gray-500 text-[14px]">Make sure you can access this email, to verify it.</p>
              </div>
            </div>
  
            <!-- password -->
            <div class="form-group mb-5">
              <label for="password" class="block mb-2 text-[14px] text-gray-700 font-medium">Password</label>
              <input type="password" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your password">
              <div class="note flex gap-4 items-start mt-2">
                <img src="/images/info-circle.svg" alt="info">
                <p class="text-gray-500 text-[14px]">Password should have at least 8 characters or more, should have 1 uppercase, lowercase letters and 1 number.</p>
              </div>
            </div>
  
            <!-- submit -->
            <div class="form-group mb-5">
              <button class="bg-primaryPurple w-full text-white text-[14px] py-3 rounded-[6px]">Sign in</button>
            </div>
          </form>
  
          <!-- google signin -->
          <div class="sign-in-google mt-6">
            <button class="flex items-center justify-center gap-5 w-full py-3 border rounded-[6px] border-gray-300">
              <img src="/images/google.svg" alt="google">
              <p class="text-gray-500 text-[14px]">Sign Up with Google</p>
            </button>
          </div>
  
          <p class="text-gray-500 mt-6 text-center">Already have an account? <router-link to="/login" class="text-primaryPurple">Login in</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SignUpPage',
  }
  </script>
  
<template>
   <div class="flex justify-center items-center py-10">
        <div class="signup-form bg-white shadow-primary rounded-md p-10 md:w-[600px]">
          <h1 class="text-[26px] mb-4 font-bold text-center">Forgot Password</h1>
          <p class="text-center text-gray-500 text-[14px]">Welcome back! Please enter your details.</p>
  
          <!-- form -->
          <form class="mt-8">
            <!-- email -->
            <div class="form-group mb-5">
              <label for="email" class="block mb-2 text-[14px] text-gray-700 font-medium">Email</label>
              <input type="email" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your email">
            </div>
  
            <!-- submit -->
            <div class="form-group mb-5">
              <button class="bg-primaryPurple w-full text-white text-[14px] py-3 rounded-[6px]">Forgot password</button>
            </div>
          </form>
  
          <p class="text-gray-500 mt-6 text-center">Don’t have an account? <router-link to="/" class="text-primaryPurple">Sign up</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ForgotPasswordPage',
  }
  </script>
  
<template>
    <div class="flex justify-center items-center py-10">
        <div class="signup-form bg-white shadow-primary rounded-md p-10 md:w-[600px]">
          <h1 class="text-[26px] mb-4 font-bold text-center">Reset Password</h1>
          <p class="text-center text-gray-500 text-[14px]">Welcome back! Please enter your details.</p>
  
          <!-- form -->
          <form class="mt-8">
            <!-- password -->
            <div class="form-group mb-5">
              <label for="password" class="block mb-2 text-[14px] text-gray-700 font-medium">Password</label>
              <input type="password" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your password">
            </div>

            <!-- password confirmation -->
            <div class="form-group mb-5">
              <label for="password" class="block mb-2 text-[14px] text-gray-700 font-medium">Password confirmation</label>
              <input type="password" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your password confirmation">
            </div>
  
            <!-- submit -->
            <div class="form-group mb-5">
              <button class="bg-primaryPurple w-full text-white text-[14px] py-3 rounded-[6px]">Reset password</button>
            </div>
          </form>
  
          <p class="text-gray-500 mt-6 text-center">Already have an account? <router-link to="/login" class="text-primaryPurple">Login in</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ResetPasswordPage',
  }
  </script>
  
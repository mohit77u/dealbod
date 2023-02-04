<template>
    <div class="flex justify-center items-center py-10">
        <div class="signup-form bg-white shadow-primary rounded-md p-10 md:w-[600px]">
          <h1 class="text-[26px] mb-4 font-bold text-center">Sign in to your account</h1>
          <p class="text-center text-gray-500 text-[14px]">Welcome back! Please enter your details.</p>
  
          <!-- form -->
          <form class="mt-8">
            <!-- email -->
            <div class="form-group mb-5">
              <label for="email" class="block mb-2 text-[14px] text-gray-700 font-medium">Email</label>
              <input type="email" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your email">
            </div>
  
            <!-- password -->
            <div class="form-group mb-5">
              <label for="password" class="block mb-2 text-[14px] text-gray-700 font-medium">Password</label>
              <input type="password" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your password">
            </div>

            <div class="form-group flex justify-between items-center mb-5">
                <div class="flex items-center">
                    <input id="forgot" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="forgot" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <router-link to="/forgot-password" class="text-primaryPurple text-[14px]">Forgot password</router-link>
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
              <p class="text-gray-500 text-[14px]">Sign in with Google</p>
            </button>
          </div>
  
          <p class="text-gray-500 mt-6 text-center">Don’t have an account? <router-link to="/" class="text-primaryPurple">Sign up</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'LoginPage',
  }
  </script>
  
<template>
    <div class="complete-profile flex justify-center items-center py-10">
        <div class="signup-form bg-white shadow-primary rounded-md p-10 md:w-[600px]">
          <h1 class="text-[26px] mb-4 font-bold text-center">Complete Profile</h1>
          <p class="text-center text-gray-500 text-[14px]">Hi there, Welcome to Dealbod. Let’s get your account set-up</p>
          <div class="bg-lightGray p-5 py-3 my-5 rounded-[6px] flex items-center gap-4 w-full">
            <img src="/images/info-circle-purple.svg" alt="info">
            <p class="text-primaryPurple text-[16px]">Kindly provide your authentic details as this will help in pre-verification before you can join the platform</p>
          </div>
          <!-- form -->
          <form class="mt-8">
            <div class="mb-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
              <!-- First Name -->
              <div class="form-group">
                <label class="block mb-2 text-[14px] text-gray-700 font-medium">First Name</label>
                <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your first name">
              </div>
  
              <!-- Last Name -->
              <div class="form-group">
                <label class="block mb-2 text-[14px] text-gray-700 font-medium">Last Name</label>
                <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your last name">
              </div>
            </div>
  
            <!-- phone -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Phone Number</label>
              <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your phone">
            </div>
  
            <!-- Location -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Location</label>
              <div class="input relative">
                <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Select location">
                <select class="absolute right-4 top-0 bg-transparent border-0 focus:outline-none focus:ring-0">
                  <option value="NGN">NGN</option>
                  <option value="NGN">NGN</option>
                  <option value="NGN">NGN</option>
                  <option value="NGN">NGN</option>
                </select>
              </div>
            </div>
  
            <!-- LinkedIn Account -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">LinkedIn Account</label>
              <div class="input relative">
                <input type="text" class="border-gray-300 pl-16 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Select location">
                <img src="/images/link.svg" alt="tooltip" class="absolute left-4 top-[10px]">
              </div>
            </div>
  
            <!-- for bussiness -->
            <div class="flex items-center gap-2 w-full my-10">
              <p class="text-gray-500 text-[14px] whitespace-nowrap">For Businesses</p>
              <div class="w-full h-[3px] bg-gray-200"></div>
            </div>
  
            <!-- Business Name -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Business Name</label>
              <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your business name">
            </div>
  
            <!-- Business Description -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Business Description</label>
              <textarea class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your business description" rows="5"></textarea>
            </div>
  
            <!-- Business Email -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Business Email</label>
              <input type="text" class="border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full" placeholder="Enter your business email">
            </div>
  
            <!-- Business Category -->
            <div class="form-group mb-5">
              <label class="block mb-2 text-[14px] text-gray-700 font-medium">Business Category</label>
              <select class="border border-gray-300 rounded-[6px] text-gray-500 text-[14px] w-full">
                <option value="">Select Category</option>
                <option value="NGN">NGN</option>
                <option value="NGN">NGN</option>
                <option value="NGN">NGN</option>
                <option value="NGN">NGN</option>
              </select>
            </div>
  
            <!-- submit -->
            <div class="form-group mb-5">
              <button class="bg-primaryPurple w-full text-white text-[14px] py-3 rounded-[6px]">Create Account</button>
            </div>
          </form>
  
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'CompleteProfile',
  }
  </script>
  
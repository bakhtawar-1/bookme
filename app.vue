<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <Navbar @toggle-sidebar="toggleMobileSidebar" />
    
    <!-- Mobile Sidebar -->
    <MobileSidebar :is-open="mobileSidebarOpen" @close="closeMobileSidebar" />
    
    <div class="flex">
      <!-- Desktop Sidebar -->
      <Sidebar @close="closeMobileSidebar" />
      
      <!-- Main Content -->
      <div class="flex-1 bg-blue-50 lg:pl-64 pt-20">
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">Good Morning, Shijra</h2>
              <p class="text-gray-500 text-base lg:text-lg">Monday, 20-August-2024</p>
            </div>
            <div class="relative mt-0">
              <button
                @click="isDropdownOpen = !isDropdownOpen"
                class="flex items-center gap-2 border border-blue-400 text-blue-700 px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5m-1.5 3v6.75a2.25 2.25 0 01-2.25 2.25H7.5a2.25 2.25 0 01-2.25-2.25V10.5m12 0V7.5a2.25 2.25 0 00-2.25-2.25H7.5A2.25 2.25 0 005.25 7.5v3" />
                </svg>
                <span>This Week</span>
                <svg class="w-4 h-4 transform" :class="{ 'rotate-180': isDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div
                v-if="isDropdownOpen"
                class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow z-10"
              >
                <ul class="py-2 text-sm text-gray-700">
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Today</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">This Week</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">This Month</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="bg-white p-5 rounded-lg shadow flex flex-col items-start border-l-6 border-blue-500 w-full relative">
              <div class="flex justify-between items-center w-full mb-2">
                <div class="flex items-center space-x-2">
                  <span class="text-gray-500 text-lg font-semibold">Total Bookings</span>
                </div>
                <div class="bg-blue-100 p-2 rounded-full shadow-inner w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M8 2v4"/>
                    <path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                    <path d="m9 16 2 2 4-4"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-start gap-2">
                <span class="text-3xl font-bold">{{ cards.totalBookings?.value ?? '-' }}</span>
                <span class="text-sm px-2 py-1 rounded bg-red-50 text-red-600 flex items-center">
                  {{ cards.totalBookings?.change < 0 ? '↓' : '↑' }} {{ Math.abs(cards.totalBookings?.change ?? 0) }}%
                </span>
              </div>
            </div>
            <div class="bg-white p-5 rounded-lg shadow flex flex-col items-start border-l-6 border-blue-500 w-full relative">
              <div class="flex justify-between items-center w-full mb-2">
                <div class="flex items-center space-x-2">
                  <span class="text-gray-500 text-lg font-semibold">Total Savings</span>
                </div>
                <div class="bg-blue-100 p-2 rounded-full shadow-inner w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-minimal-icon lucide-wallet-minimal text-blue-500"><path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14 "/></svg>
                </div>
              </div>
              <div class="flex items-center justify-start gap-2">
                <span class="text-3xl font-bold">{{ cards.totalSavings?.value ?? '-' }}</span>
                <span class="text-sm px-2 py-1 rounded bg-green-50 text-green-600 flex items-center">
                  {{ cards.totalSavings?.change > 0 ? '↑' : '↓' }} {{ Math.abs(cards.totalSavings?.change ?? 0) }}%
                </span>
              </div>
            </div>
            <div class="bg-white p-5 rounded-lg shadow flex flex-col items-start border-l-6 border-blue-500 w-full relative">
              <div class="flex justify-between items-center w-full mb-2">
                <div class="flex items-center space-x-2">
                  <span class="text-gray-500 text-lg font-semibold">Total Expense</span>
                </div>
                <div class="bg-blue-100 p-2 rounded-full shadow-inner w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
                    <path d="M8 2v4"/>
                    <path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                    <path d="m9 16 2 2 4-4"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-start gap-2">
                <span class="text-3xl font-bold">{{ cards.totalExpense?.value ?? '-' }}</span>
                <span class="text-sm px-2 py-1 rounded bg-red-50 text-red-600 flex items-center">
                  {{ cards.totalExpense?.change < 0 ? '↓' : '↑' }} {{ Math.abs(cards.totalExpense?.change ?? 0) }}%
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <TotalSpendingChart />
            <TotalBookingsBar />
          </div>
          <div class="mt-6">
            <RecentBookingsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
import MobileSidebar from '~/components/MobileSidebar.vue'
import TotalSpendingChart from '~/components/TotalSpendingChart.vue'
import TotalBookingsBar from '~/components/TotalBookingsBar.vue'
import RecentBookingsTable from '~/components/RecentBookingsTable.vue'

const isDropdownOpen = ref(false)
const mobileSidebarOpen = ref(false)
const { data } = await useFetch('/api/bookings')
const cards = data.value?.dashboardCards || {}

function toggleMobileSidebar() {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>

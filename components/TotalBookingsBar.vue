<template>
  <div class="bg-white rounded-xl p-6 shadow flex flex-col h-full">
    <div class="text-gray-700 text-lg font-semibold mb-4">Total Bookings</div>
    <div class="flex flex-col gap-4">
      <div v-for="item in bookings" :key="item.category" class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <i :class="getIconClass(item.category)" />
          <span class="text-gray-700">{{ item.category }}</span>
        </div>
        <div class="flex items-center gap-5">
          <div class="bg-orange-100 rounded-full h-2 w-88 relative overflow-hidden">
            <div 
              class="absolute rounded-full top-0 left-0" 
              :style="`background: linear-gradient(to right, #d9741f, #f59e42, #fde5c4); width: ${getWidth(item.value)}%; height: 100%;`"
            ></div>
          </div>
          <span class="text-gray-600">Rs. {{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { data } = await useFetch('/api/bookings')
const bookings = data.value?.totalBookings || []

const iconMap: Record<string, string> = {
  Flights: 'fas fa-plane text-orange-300',
  Buses: 'fas fa-bus text-green-300',
  'Car Rent': 'fas fa-car text-blue-300',
  Hotels: 'fas fa-hotel text-yellow-300',
  Train: 'fas fa-train text-blue-200',
  Events: 'fas fa-calendar-alt text-purple-300',
  Tours: 'fas fa-route text-purple-500'
}

const getIconClass = (category: string) => iconMap[category] || 'fas fa-question-circle text-gray-400'

const maxValue = Math.max(...bookings.map(b => b.value)) || 1
const getWidth = (value: number) => (value / maxValue) * 100
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>

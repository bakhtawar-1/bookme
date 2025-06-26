<template>
      <h3 class="text-lg font-bold mb-4 mt-8">Recent Bookings</h3>

    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="min-w-full text-sm text-left divide-y divide-gray-200">
        <thead class="bg-[rgba(230,230,230,0.42)]">
          <tr>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Sr. #</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Order ID</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Booked For</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Booking Type</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Debit</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Credit</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Total</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Status</th>
            <th class="px-4 py-3 font-semibold text-black border-b border-gray-200 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(row, idx) in rows" :key="row.orderId" class="hover:bg-gray-50">
            <td class="px-4 py-3 text-gray-500 border-b border-gray-200 border-r text-center">{{ idx + 1 }}</td>
            <td class="px-4 py-3 text-gray-500 border-b border-gray-200 border-r text-center">{{ row.orderId }}</td>
            <td class="px-4 py-3 text-gray-500 border-b border-gray-200 border-r text-center">{{ row.bookedFor }}</td>
            <td class="px-4 py-3 text-gray-500 border-b border-gray-200 border-r text-center">{{ row.bookingType }}</td>
            <td class="px-4 py-3 text-red-500 border-b border-gray-200 border-r text-center">Rs.{{ row.debit }}</td>
            <td class="px-4 py-3 text-green-600 border-b border-gray-200 border-r text-center">Rs.{{ row.credit }}</td>
            <td class="px-4 py-3 text-gray-500 border-b border-gray-200 border-r text-center">Rs.{{ row.total }}</td>
            <td class="px-4 py-3 border-b border-gray-200 border-r text-center">
              <span :class="row.status === 'Unpaid' ? 'bg-red-100 text-red-600' : row.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'" class="px-2 py-1 rounded text-xs font-semibold block mx-auto">
                {{ row.status }}
              </span>
            </td>
            <td class="px-4 py-3 text-center border-b border-gray-200">
              <button class="text-gray-400 hover:text-blue-600 mx-auto block">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <circle cx="12" cy="5" r="2" />
  <circle cx="12" cy="12" r="2" />
  <circle cx="12" cy="19" r="2" />
</svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { data } = await useFetch('/api/bookings')
const rows = data.value?.recentBookings || []
</script>
<template>
  <div class="bg-white rounded-xl p-6 shadow flex flex-col h-full">
    <div class="flex items-center justify-between mb-2">
      <div>
        <div class="text-gray-500 text-sm">Total Spending</div>
        <div class="text-2xl font-bold">
          ${{ latestSpending.toLocaleString(undefined, { minimumFractionDigits: 1 }) }}K
        </div>
      </div>
      <select class="border border-gray-200 rounded px-2 py-1 text-sm">
        <option>Select Category</option>
      </select>
    </div>

    <div class="relative w-full min-w-0" style="height:320px;">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler)

// Fetch data from API
const { data } = await useFetch('/api/bookings')
const spending = data.value?.totalSpending || {
  labels: [],
  data: [],
  trend: []
}

// Dynamic chart data
const chartData = computed(() => ({
  labels: spending.labels,
  datasets: [
    {
      label: 'Spending',
      data: spending.data,
      borderColor: '#2563eb',
      backgroundColor: (ctx: any) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 220)
        gradient.addColorStop(0, 'rgba(37,99,235,0.4)')
        gradient.addColorStop(1, 'rgba(37,99,235,0)')
        return gradient
      },
      fill: true,
      tension: 0.3,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0
    },
    {
      label: 'Trend Line',
      data: spending.trend,
      borderColor: '#10b981',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0
    }
  ]
}))

// Latest value to display above chart
const latestSpending = computed(() => {
  const dataArray = spending.data || []
  const lastValid = [...dataArray].reverse().find(v => typeof v === 'number' && v > 0)
  return lastValid ? (lastValid / 1000).toFixed(1) : '0'
})

// Chart config
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#000',
      borderColor: '#ccc',
      borderWidth: 1,
      callbacks: {
        label: (context: any) => `$${context.parsed.y.toLocaleString()}`
      }
    },
    title: { display: false }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#a3a3a3', font: { size: 12 } }
    },
    y: {
      grid: { color: '#e5e7eb' },
      ticks: {
        color: '#a3a3a3',
        font: { size: 12 },
        callback: (value: number) => `$${(value / 1000).toFixed(0)}K`
      }
    }
  }
})
</script>

<style scoped>
.chartjs-render-monitor {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>

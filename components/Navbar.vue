<template>
  <nav class="fixed top-0 left-0 right-0 z-40 w-full bg-white flex items-center justify-between px-6 py-3">
          <div class="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="w-6 h-6 text-gray-700" 
       fill="none" viewBox="0 0 24 24" 
       stroke="currentColor" stroke-width="2" 
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 12H3"/>
    <path d="M17 18H3"/>
    <path d="M21 6H3"/>
  </svg>

  <img src="/bookme-logo.jpeg" alt="Bookme Logo" class="h-10 w-auto ml-4" />
</div>

    <div class="flex-1"></div>
    
    <div class="flex items-center gap-2 ml-auto">
      <button class="bg-blue-100 rounded-full p-2 flex items-center justify-center">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
      </button>
      <button class="bg-blue-100 rounded-full p-2 flex items-center justify-center">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell text-blue-500">
          <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
      </button>
      <button class="bg-blue-100 rounded-full p-2 font-bold text-blue-700 w-10 h-10 flex items-center justify-center">SH</button>
      <div class="relative ml-2">
        <button
          id="user-dropdown-btn"
          class="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-200"
          @click.stop="toggleUserDropdown"
        >
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div
          v-if="userDropdownOpen"
          id="user-dropdown"
          class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow z-50"
        >
          <ul class="py-2 text-sm text-gray-700">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Profile</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const userDropdownOpen = ref(false)

function toggleUserDropdown() {
  userDropdownOpen.value = !userDropdownOpen.value
}

function closeUserDropdown(e: MouseEvent) {
  const dropdown = document.getElementById('user-dropdown')
  const button = document.getElementById('user-dropdown-btn')
  if (
    dropdown &&
    !dropdown.contains(e.target as Node) &&
    button &&
    !button.contains(e.target as Node)
  ) {
    userDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeUserDropdown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', closeUserDropdown)
})
</script>


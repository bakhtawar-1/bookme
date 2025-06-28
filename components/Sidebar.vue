<template>
  <aside class="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white hidden lg:flex flex-col justify-between p-4 z-30 overflow-y-auto">
    <!-- Close button for mobile (hidden on large screens) -->
    <button 
      @click="$emit('close')" 
      class="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6L6 18"/>
        <path d="M6 6l12 12"/>
      </svg>
    </button>
    
    <div>
      <nav class="space-y-2 text-gray-500 text-sm">
        <div class="flex items-center gap-3 mb-2">
        </div>
        <SidebarLink label="Dashboard">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="7" height="9" x="3" y="3" rx="1"/>
              <rect width="7" height="5" x="14" y="3" rx="1"/>
              <rect width="7" height="9" x="14" y="12" rx="1"/>
              <rect width="7" height="5" x="3" y="16" rx="1"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="My Bookings">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
              <path d="m9 16 2 2 4-4"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Approvals">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Ledger">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-minimal-icon lucide-wallet-minimal"><path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/></svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Make Bookings">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 19h6"/>
              <path d="M16 2v4"/>
              <path d="M19 16v6"/>
              <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"/>
              <path d="M3 10h18"/>
              <path d="M8 2v4"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Reports">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
              <rect x="15" y="5" width="4" height="12" rx="1"/>
              <rect x="7" y="8" width="4" height="9" rx="1"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Invoices">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 2v4"/>
              <path d="M12 2v4"/>
              <path d="M16 2v4"/>
              <rect width="16" height="18" x="4" y="4" rx="2"/>
              <path d="M8 10h6"/>
              <path d="M8 14h8"/>
              <path d="M8 18h5"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Users">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 21a8 8 0 0 0-16 0"/>
              <circle cx="10" cy="8" r="5"/>
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Passengers List">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="5"/>
              <path d="M20 21a8 8 0 0 0-16 0"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Roles and Permissions">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m14.305 19.53.923-.382"/>
              <path d="m15.228 16.852-.923-.383"/>
              <path d="m16.852 15.228-.383-.923"/>
              <path d="m16.852 20.772-.383.924"/>
              <path d="m19.148 15.228.383-.923"/>
              <path d="m19.53 21.696-.382-.924"/>
              <path d="M2 21a8 8 0 0 1 10.434-7.62"/>
              <path d="m20.772 16.852.924-.383"/>
              <path d="m20.772 19.148.924.383"/>
              <circle cx="10" cy="8" r="5"/>
              <circle cx="18" cy="18" r="3"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Departments">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="7" x="3" y="3" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
              <rect width="7" height="7" x="14" y="14" rx="1"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Privacy Policy">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </template>
        </SidebarLink>
        <SidebarLink label="Terms & Conditions">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 2v4"/>
              <path d="M12 2v4"/>
              <path d="M16 2v4"/>
              <rect width="16" height="18" x="4" y="4" rx="2"/>
              <path d="M8 10h6"/>
              <path d="M8 14h8"/>
              <path d="M8 18h5"/>
            </svg>
          </template>
        </SidebarLink>
        <slot name="links" />
      </nav>
      <div class="mt-8 p-3 border rounded bg-blue-50 text-sm">
        <div class="font-semibold text-blue-800">Credit</div>
        <div class="text-gray-800">Total Balance</div>
        <div class="text-blue-900 font-bold">PKR 510</div>
      </div>
    </div>
    <nav class="space-y-2 text-gray-700 text-sm mt-4">
      <slot name="logout" />
    </nav>
    <nav class="space-y-2 text-red-700 text-[0.65rem]">
      <SidebarLink label="Logout">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m16 17 5-5-5-5"/>
            <path d="M21 12H9"/>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          </svg>
        </template>
      </SidebarLink>
    </nav>
  </aside>
</template>

<script setup>
// No JavaScript needed
</script>

<style>
/* Optional: Add any additional styles here */
aside {
  scrollbar-width: thin;
  scrollbar-color: #e2e8f0 #f8fafc;
}

aside::-webkit-scrollbar {
  width: 4px;
}

aside::-webkit-scrollbar-track {
  background: #f8fafc;
}

aside::-webkit-scrollbar-thumb {
  background-color: #e2e8f0;
  border-radius: 2px;
}
</style>
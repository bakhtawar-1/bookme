<template>
  <div
    :class="[
      'flex items-center gap-2 px-3 py-2 rounded cursor-pointer',
      active ? 'bg-blue-100 text-blue-600 font-medium' : 'hover:bg-blue-100'
    ]"
  >
    <span class="text-lg">
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  active: Boolean
})
</script>

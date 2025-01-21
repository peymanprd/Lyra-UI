<script lang="ts" setup>
const { config: $config } = useConfig()

defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline'
}>()
</script>

<template>
  <button
    :class="[
      $config.useTailwind
        ? 'px-4 py-2 rounded-md font-semibold transition-colors bg-blue-500 text-white hover:bg-blue-600'
        : 'button-base',
      {
        'text-right': $config.direction === 'rtl',
        'text-left': $config.direction === 'ltr',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
/* Base styles for the button if useTailwind is false */
.button-base {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  background-color: #007bff;
  color: white;
}

.button-base:hover {
  background-color: #0056b3;
}
</style>

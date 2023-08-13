<template>
  <button
    class="duration-10 m-4 transform rounded bg-blue-500 px-4 py-2 font-bold text-white transition-transform ease-in-out hover:bg-blue-600 active:translate-x-1 active:translate-y-1 active:bg-blue-700"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>

<style scoped></style>

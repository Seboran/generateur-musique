<template>
  <button
    class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 transition-transform duration-10 ease-in-out transform active:translate-y-1 active:translate-x-1"
    type="button"
    @click="$emit('click')"
  >
    Propager
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>

<style scoped></style>

<template>
  <tr
    class="border-blue-300 [&:nth-child(3n+0)]:border-b-4 [&:nth-child(3n+1)]:border-t-4"
  >
    <SudokuAfficherCellule
      v-for="(cellule, index) in ligne"
      :key="index"
      :model-value="cellule"
      @update:model-value="updateLigne(index, $event)"
      :possibilites="possibilites[index]"
    />
  </tr>
</template>

<script setup lang="ts">
import { SudokuCellule, SudokuPossibilitesCellule } from 'lib-effondrement'

const props = defineProps<{
  possibilites: SudokuPossibilitesCellule[]
  modelValue: SudokuCellule[]
}>()

const emits = defineEmits<{
  'update:modelValue': [value: SudokuCellule[]]
}>()

const ligne = computed({
  get: () => props.modelValue,
  set: (value: SudokuCellule[]) => {
    emits('update:modelValue', value)
  },
})

function updateLigne(index: number, value: SudokuCellule) {
  console.log('set', value)
  const ligneCopie = [...ligne.value]
  ligneCopie[index] = value
  ligne.value = ligneCopie
}
</script>

<style scoped></style>

<template>
  <td
    class="w-10 h-10 box-border [&:nth-child(3n+0)]:border-r-4 [&:nth-child(3n+1)]:border-l-4 bg-clip-border m-2 text-center bg-slate-100/25 border-2 border-blue-300 focus-within:bg-slate-200 focus:bg-slate-200"
  >
    <input
      class="w-full h-full box-content text-center bg-inherit bg-clip-border"
      :class="{
        'bg-slate-200': !!cellule,
      }"
      :disabled="!!cellule"
      name="cellule"
      :value="cellule || ''"
      @input="update"
    />
  </td>
</template>

<script setup lang="ts">
import { SudokuCellule, SudokuPossibilitesCellule } from 'lib-effondrement'
const props = defineProps<{
  modelValue: SudokuCellule
  possibilites: SudokuPossibilitesCellule
}>()

const emit = defineEmits<{
  'update:modelValue': [SudokuCellule]
}>()

const cellule = computed<SudokuCellule>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

function update(value: Event) {
  const target = value.target as HTMLInputElement

  const parsedInt = parseInt(target?.value)

  if (isNaN(parsedInt)) {
    cellule.value = 0
    return
  }

  if (props.possibilites.includes(parsedInt)) {
    cellule.value = parsedInt
    return
  }

  cellule.value = 0
}
</script>

<style scoped></style>

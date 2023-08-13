<template>
  <div class="h-90">
    <table>
      <SudokuAfficherLigne
        v-for="(ligne, index) in _grid"
        :key="index"
        :model-value="ligne"
        @update:model-value="updateGrille(index, $event)"
        :possibilites="possibilites[index]"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import {
  SudokuCellule,
  SudokuGrid,
  SudokuPossibilitesCellule,
} from 'lib-effondrement'

const props = defineProps<{
  possibilites: SudokuPossibilitesCellule[][]
  grid: SudokuGrid
}>()

const emit = defineEmits<{
  'update:grid': [grid: SudokuGrid]
}>()

const _grid = computed({
  get: () => props.grid,
  set: (grid: SudokuGrid) => emit('update:grid', grid),
})

function updateGrille(index: number, ligne: SudokuCellule[]) {
  const gridCopie = [..._grid.value]
  gridCopie[index] = ligne
  _grid.value = gridCopie
}
</script>

<style scoped></style>

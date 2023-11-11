<template>
  <AppLayout>
    <div>
      <div>
        <SudokuAfficherGrille
          v-model:grid="sudoku.grid"
          :possibilites="sudoku.possibilitesGrid"
        />
      </div>
      <StyledBouton @click="propager"> Propager </StyledBouton>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import 'lib-style/dist/style.css'

import AppLayout from '@/components/AppLayout.vue'
import { useSudokuGrid } from '@/composables/useSudokuGrid'
import { StyledBouton } from 'lib-style'
import SudokuAfficherGrille from './components/sudoku/SudokuAfficherGrille.vue'
const { sudoku, propager } = useSudokuGrid()
</script>

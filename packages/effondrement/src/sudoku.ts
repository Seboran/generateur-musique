type SudokuCell = number | null

export class Sudoku {
  grid: SudokuCell[][]

  constructor() {
    // Initialisation du tableau 9x9 avec des valeurs null
    this.grid = Array.from({ length: 9 }, () => Array(9).fill(null))
  }

  initialize(puzzle: SudokuCell[][]) {
    if (puzzle.length !== 9 || puzzle.some((row) => row.length !== 9)) {
      throw new Error('Invalid puzzle')
    }
    this.grid = puzzle
  }

  collapseWaveFunction() {
    const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.grid[row][col] === null) {
          // Prenez une valeur possible au hasard pour cette cellule
          this.grid[row][col] =
            possibleValues[Math.floor(Math.random() * possibleValues.length)]
        }
      }
    }
  }
}

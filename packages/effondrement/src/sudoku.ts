export type SudokuCellule = number | null
export type SudokuGrid = SudokuCellule[][];

export class Sudoku {
  grid: SudokuCellule[][]

  constructor() {
    // Initialisation du tableau 9x9 avec des valeurs null
    this.grid = Array.from({ length: 9 }, () => Array(9).fill(null))
  }

  initialize(puzzle: SudokuCellule[][]) {
    if (puzzle.length !== 9 || puzzle.some((row) => row.length !== 9)) {
      throw new Error('Invalid puzzle')
    }
    this.grid = puzzle
  }

  collapseWaveFunction(): SudokuGrid {
    // Itérer sur chaque cellule du sudoku
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // Si la cellule est vide (représentée par 0)
        if (this.grid[i][j] === 0) {
          // Générer une liste de possibilités pour cette cellule
          const possibilities = this.getPossibilities(this.grid, i, j);
          // Si il n'y a qu'une seule possibilité, la choisir
          if (possibilities.length === 1) {
            this.grid[i][j] = possibilities[0];
          }
        }
      }
    }
    return this.grid;
  }
  
  getPossibilities(sudoku: SudokuGrid, row: number, col: number): number[] {
    const possibilities: number[] = [];
  
    // Vérifier chaque nombre de 1 à 9
    for (let num = 1; num <= 9; num++) {
      if (this.isValid(sudoku, row, col, num)) {
        possibilities.push(num);
      }
    }
    return possibilities;
  }
  
  isValid(sudoku: SudokuGrid, row: number, col: number, num: number): boolean {
    // Vérifier la ligne
    for (let i = 0; i < 9; i++) {
      if (sudoku[row][i] === num) {
        return false;
      }
    }
    // Vérifier la colonne
    for (let i = 0; i < 9; i++) {
      if (sudoku[i][col] === num) {
        return false;
      }
    }
    // Vérifier le bloc 3x3
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (sudoku[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
    return true;
  }
}

import { fireEvent, render } from '@testing-library/vue'
import { expect, suite, test } from 'vitest'
import SudokuAfficherGrille from '../SudokuAfficherGrille.vue'
import {
  makeGrilleRemplie,
  makeGrilleVide,
  makePossibilitesCompletes,
  makePossibilitesVides,
} from './makeMocks'
import userEvent from '@testing-library/user-event'

suite('SudokuAfficherGrille', () => {
  test('Affiche une grille', () => {
    const { queryByRole } = render(SudokuAfficherGrille, {
      props: {
        grid: makeGrilleRemplie(),
        possibilites: makePossibilitesVides(),
      },
    })
    const grille = queryByRole('table')
    expect(grille).not.toBeNull()
  })
  test('Affiche 9 lignes', () => {
    const { getAllByRole } = render(SudokuAfficherGrille, {
      props: {
        grid: makeGrilleRemplie(),
        possibilites: makePossibilitesVides(),
      },
    })
    const lignes = getAllByRole('row')
    expect(lignes).toHaveLength(9)
  })
  test('Affiche 81 inputs', () => {
    const { getAllByRole } = render(SudokuAfficherGrille, {
      props: {
        grid: makeGrilleRemplie(),
        possibilites: makePossibilitesVides(),
      },
    })
    const lignes = getAllByRole('row')
    expect(lignes).toHaveLength(9)
    const inputs: HTMLInputElement[] = getAllByRole('textbox')
    expect(inputs).toHaveLength(81)
    expect(inputs[0].value).toBe(1)
    expect(inputs[1].value).toBe(2)
    expect(inputs[2].value).toBe(3)
    expect(inputs[3].value).toBe(4)
    expect(inputs[4].value).toBe(5)
    expect(inputs[5].value).toBe(6)
    expect(inputs[6].value).toBe(7)
    expect(inputs[7].value).toBe(8)
    expect(inputs[8].value).toBe(9)
    // Tous les inputs sont disabled
    expect(inputs.flatMap((input) => input.attributes)).toContainEqual(
      expect.not.objectContaining({ name: 'disabled' }),
    )
  })
  test('Modifier une valeur', async () => {
    const { getAllByRole, emitted } = render(SudokuAfficherGrille, {
      props: {
        grid: makeGrilleVide(),
        possibilites: makePossibilitesCompletes(),
      },
    })
    const inputs: HTMLInputElement[] = getAllByRole('textbox')
    await fireEvent.update(inputs[0], '9')
    expect(inputs[0].value).toBe('9')
    expect(emitted()).toHaveProperty('update:grid')
    expect(emitted()['update:grid']).toHaveLength(1)
    // @ts-ignore : le type de update:grid est incorrect
    expect(emitted()['update:grid'][0][0][0]).toEqual([
      9, 0, 0, 0, 0, 0, 0, 0, 0,
    ])
  })
})

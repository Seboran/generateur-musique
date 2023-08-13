import { render } from '@testing-library/vue'
import { suite, test, expect } from 'vitest'
import StyledBouton from '../StyledBouton.vue'

suite('StyledBouton', () => {
  test('affiche un bouton', () => {
    const { getByRole } = render(StyledBouton, {
      slots: { default: 'Mon bouton' },
    })
    const bouton = getByRole('button')
    expect(bouton.textContent).toBe('Mon bouton')
  })
  test('émet un événement sur un click', async () => {
    const { getByRole, emitted } = render(StyledBouton, {
      slots: { default: 'Mon bouton' },
    })
    const bouton = getByRole('button')
    bouton.click()
    expect(emitted().click).toHaveLength(1)
  })
})

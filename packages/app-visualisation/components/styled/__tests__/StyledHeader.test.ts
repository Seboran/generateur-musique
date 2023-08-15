import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { expect, suite, test, vi } from 'vitest'
import StyledHeader from '../StyledHeader.vue'

const back = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    back,
  }),
}))

suite('StyledHeader', async () => {
  beforeEach(() => {
    back.mockClear()
  })
  test('Contient un bloc de navigation', () => {
    const { getByText } = render(StyledHeader, {})
    getByText('Accueil')
  })
  test("Contient un titre cliquable qui renvoie à la page d'accueil", async () => {
    const { getByText } = render(StyledHeader)
    const header = getByText('Accueil')
    await userEvent.click(header)
    expect(back).toHaveBeenCalled()
  })
  test('Contient un titre accessible par tabulation', async () => {
    render(StyledHeader)
    await userEvent.tab()
    await userEvent.keyboard('{enter}')
    expect(back).toHaveBeenCalled()
  })
})

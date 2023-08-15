import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { expect, suite, test, vi } from 'vitest'
import StyledHeader from '../StyledHeader.vue'

const back = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () =>
    ({
      back,
    }) as Partial<ReturnType<(typeof import('vue-router'))['useRouter']>>,
}))

suite('StyledHeader', async () => {
  beforeEach(() => {
    back.mockClear()
  })
  test('Contient un bloc de navigation', () => {
    const { getByText } = render(StyledHeader, {})
    getByText('GÉNÉRATEUR')
  })
  test("Contient un bouton qui amène à l'accueil", async () => {
    const { getByText } = render(StyledHeader, {
      global: {
        stubs: {
          NuxtLink: {
            name: 'NuxtLink',
            template: '<a role="link"><slot /></a>',
          },
        },
      },
    })
    getByText(/GÉNÉRATEUR/u)
  })
})

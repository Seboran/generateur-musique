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
    getByText('Accueil')
  })
  test("Contient un titre cliquable qui renvoie à la page d'accueil", async () => {
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
    const header = getByText('Accueil')
    expect(header.role).toEqual('link')
  })
  test('Contient un bouton retour arrière accessible par tabulation', async () => {
    render(StyledHeader)
    await userEvent.tab()
    await userEvent.keyboard('{enter}')
    expect(back).toHaveBeenCalled()
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
    const accueilBouton = getByText('Accueil')
    expect(accueilBouton.role).toEqual('link')
  })
})

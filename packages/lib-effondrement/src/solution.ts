import { PropagateurSolution } from './propager'
import { Superposition } from './superposition'

export abstract class Solution<T, U> {
  constructor(
    public valeurs: Superposition<T, U>[],
    public contexte: U,
  ) {}
  public accept(visiteur: PropagateurSolution<T, U>): Superposition<T, U>[] {
    this.valeurs = visiteur.visit(this.valeurs)
    this.setContexte()
    this.valeurs.forEach((solution) => (solution.contexte = this.contexte))
    return this.valeurs
  }

  abstract setContexte(): void
}

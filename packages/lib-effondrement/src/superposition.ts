import { Regle } from './regle'

export class Superposition<ValeursSuperposition, ContexteProbleme> {
  constructor(
    public solutions: ValeursSuperposition[] = [],
    public contexte: ContexteProbleme,
  ) {}

  appliquer(
    regles: Regle<ValeursSuperposition, ContexteProbleme>[],
  ): Superposition<ValeursSuperposition, ContexteProbleme> {
    const nouvellesSolutions = this.solutions.filter((solution) =>
      regles.some((regle) => regle.visit(this)),
    )
    return new Superposition(nouvellesSolutions, this.contexte)
  }
}

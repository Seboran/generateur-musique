import { Regle } from './regle'

export class Superposition<ValeursSuperposition, ContexteProbleme> {
  constructor(
    public solutions: ValeursSuperposition[] = [],
    public contexte: ContexteProbleme,
    private contextualisation?: any,
  ) {
    Object.defineProperty(this, 'contextualisation', {
      value: contextualisation,
      enumerable: false, // makes it non-enumerable
      writable: true, // makes it writable if needed
    })
  }

  appliquer(
    regles: Regle<ValeursSuperposition, ContexteProbleme>[],
  ): Superposition<ValeursSuperposition, ContexteProbleme> {
    return new Superposition(
      regles.reduce(
        (accumulator, regle) =>
          regle.visit(
            new Superposition(accumulator, this.contexte),
            this.contextualisation,
          ),
        this.solutions,
      ),
      this.contexte,
      this.contextualisation,
    )
  }
}

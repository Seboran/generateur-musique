import { Regle } from './regle'

export abstract class Superposition<T> {
  public _solutions: T[] = []

  abstract effondrer(regles: Regle<T>[]): void
}

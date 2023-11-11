export abstract class Regle<T> {
  abstract appliquer(solution: T): boolean
}

export class Pagination {
  count: number;
  next: string;
  previous: string;

  constructor(
    count: number,
    next: string,
    previous: string
  ) {
    this.count = count;
    this.next = next;
    this.previous = previous;
  }

  numberOfResults(): number {
    return this.count;
  }

  getNextURL(): string {
    return this.next;
  }

  getPreviousURL(): string {
    return this.previous;
  }
}

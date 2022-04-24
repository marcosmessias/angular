export class Card {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public dueDate: string,
    public labels: string[],
    public comments: Comment[]
  ) {}
}

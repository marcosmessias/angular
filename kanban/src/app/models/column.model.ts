import { Card } from './card.model';

export class Column {
  constructor(public id: string, public name: string, public cards: Card[]) {}
}

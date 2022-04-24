import { Column } from './column.model';

export class Board {
  constructor(
    public id: string,
    public name: string,
    public columns: Column[]
  ) {}
}

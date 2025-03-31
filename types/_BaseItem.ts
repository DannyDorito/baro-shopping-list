export class BaseItem
{
  id: string;
  name: string;
  ducats: number;
  credits: number;

  constructor( id: string, name: string, ducats: number, credits: number )
  {
    this.id = id;
    this.name = name;
    this.ducats = ducats;
    this.credits = credits;
  }
}

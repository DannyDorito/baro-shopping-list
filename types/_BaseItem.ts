export class BaseItem
{
  name: string;
  ducats: number;
  credits: number;

  constructor( name: string, ducats: number, credits: number )
  {
    this.name = name;
    this.ducats = ducats;
    this.credits = credits;
  }
}

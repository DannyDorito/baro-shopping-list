import { Cosmetic, CosmeticType } from "./_Cosmetic";

export class Decoration extends Cosmetic
{
  decorationType: DecorationType;

  constructor( name: string, ducats: number, credits: number, cosmeticType: CosmeticType, decorationType: DecorationType )
  {
    super( name, ducats, credits, cosmeticType );
    this.decorationType = decorationType;
  }
}

export enum DecorationType
{
  None,
  Display,
  Poster,
  NoggleStatue,
  Miscellaneous
}

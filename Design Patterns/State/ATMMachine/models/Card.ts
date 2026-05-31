import CardType from "../enums/CardType";

export default class Card {
  private readonly cardNumber: number;
  private readonly pin: number;
  private readonly name: string;
  private readonly cardType: CardType;
  private readonly bankName: string;

  constructor(
    cardNumber: number,
    pin: number,
    name: string,
    cardType: CardType,
    bankName: string,
  ) {
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.name = name;
    this.cardType = cardType;
    this.bankName = bankName;
  }

  public getBankName(): string {
    return this.bankName;
  }

  public getCardNumber(): number {
    return this.cardNumber;
  }

  public getPin(): number {
    return this.pin;
  }

  public getName(): string {
    return this.name;
  }

  public getCardType(): CardType {
    return this.cardType;
  }

  public toString(): string {
    return `Card{cardNumber=${this.cardNumber}, pin=${this.pin}, name=${this.name}, cardType=${this.cardType}, bankName=${this.bankName}}`;
  }
}

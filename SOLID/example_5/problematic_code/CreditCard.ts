abstract class CreditCard {
  private cardNumber: string;
  private cardHolder: string;
  private expiryDate: string;
  private cvv: number;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  // Getters and Setters

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public setCardNumber(cardNumber: string): void {
    this.cardNumber = cardNumber;
  }

  public getCardHolder(): string {
    return this.cardHolder;
  }

  public setCardHolder(cardHolder: string): void {
    this.cardHolder = cardHolder;
  }

  public getExpiryDate(): string {
    return this.expiryDate;
  }

  public setExpiryDate(expiryDate: string): void {
    this.expiryDate = expiryDate;
  }

  public getCvv(): number {
    return this.cvv;
  }

  public setCvv(cvv: number): void {
    this.cvv = cvv;
  }

  public abstract swipeAndPay(): void;
  public abstract doRefund(): void;
  public abstract onlinePayment(): void;
  public abstract tapAndPay(): void;
  public abstract intlPayment(): void;
  // public abstract upiPayment(): void;
}

/*
In real world CC is driven by the issueing company and not the bank (network of the CC)
therefore making CC an abstract class make sense here.
*/

class VisaCreditCard extends CreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("Visa Credit Card swipeAndPay");
  }

  public doRefund(): void {
    console.log("Visa Credit Card doRefund");
  }

  public onlinePayment(): void {
    console.log("Visa Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Visa Credit Card tapAndPay");
  }

  public intlPayment(): void {
    console.log("Visa Credit Card intlPayment");
  }

  // public upiPayment(): void {
  //   console.log("Visa Credit Card upiPayment");
  // }
}

class AmexCreditCard extends CreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("Amex Credit Card swipeAndPay");
  }

  public doRefund(): void {
    console.log("Amex Credit Card doRefund");
  }

  public onlinePayment(): void {
    console.log("Amex Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Amex Credit Card tapAndPay");
  }

  public intlPayment(): void {
    console.log("Amex Credit Card intlPayment");
  }

  // public upiPayment(): void {
  //   console.log("Amex Credit Card upiPayment");
  // }
}
